<template>
    <div>
        <div class="row mb-3">
            <div class="col-md-12">
                <button @click="handleOrderSave" class="btn btn-success float-right">Save</button>
            </div>
        </div>
        <div class="row">
        <div class="col-md-7">
            <div class="mb-5">
                <h3>Customer details</h3>
                <order-form @customerDetailsChanged="customerDetailsHandle"></order-form>
            </div>

            <div class="mb-5">
                <h3>Order Details <span class="float-right" v-if="finalAmount > 0">{{finalAmount}}</span></h3>
                <order-list :items="orderedItems"></order-list>
            </div>
        </div>
        
        <div class="col-md-5">
            <h3>Menu Items</h3>
            <orderMenuItems 
            :items="menuItems"
            @menuItemAdded="handleNewMenuItem"></orderMenuItems>
        </div>

    </div>
    </div>
</template>

<script>
import OrderForm from './OrderForm';
import OrderMenuItems from './OrderMenuItems';
import OrderList from './OrderList';
import axios from 'axios';

export default {
    props: ['restoId'],
    components: {
        OrderForm,
        OrderMenuItems,
        OrderList
    },
    created(){
        this.fetchMenuItems();
        window.eventBus.$on('menuItemAdded', this.handleNewMenuItem);
        window.eventBus.$on('filtredList', this.handleFiltredList);
        window.eventBus.$on('clearFiltredList', this.handleClearFiltredList);
    },
    computed: {
        finalAmount(){
            let price = 0;
            this.orderedItems.forEach(order => {
                price = price + order.price;
            });
            return price;
        }
    },
    data(){
        return {
            menuItems: [],
            orderedItems: [],
            originalMenuItems: [],
            customerDetails: null
        }
    },
    methods: {
        fetchMenuItems() {
            let postData = {restoId: this.restoId}
            axios.post('/api/menu-items', postData)
            .then(response => {
                this.menuItems = response.data
                this.originalMenuItems = response.data
            })
            .catch(error => console.error(error.response));
        },

        handleNewMenuItem(menuitem){
            this.orderedItems.unshift(menuitem);
        },

        handleFiltredList(filtredList){
            this.menuItems = filtredList;
        },

        handleClearFiltredList(){
            this.menuItems = this.originalMenuItems;
        },

        customerDetailsHandle(customer){
            console.log('customer', customer);
            this.customerDetails = customer;
        },

        handleOrderSave(){
            let orderedItemsIds = [];
            this.orderedItems.forEach(item => {
                orderedItemsIds.push(item.id);
            });
            let orderData = {
                customerDetails: this.customerDetails,
                finalAmount: this.finalAmount,
                orderedItems: orderedItemsIds
            };

            console.log(orderData);
            axios.post('/api/order/save', orderData).then(response => console.log('response', response));
        }

    }
}
</script>