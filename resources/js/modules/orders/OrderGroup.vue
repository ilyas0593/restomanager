<template>
    <div class="row">
        <div class="col-md-7">
            <div class="mb-5">
                <h3>Customer details</h3>
                <order-form></order-form>
            </div>

            <div class="mb-5">
                <h3>Order Details <span class="float-right" v-if="finalAmount > 0">{{finalAmount}}</span></h3>
                <order-list :items="orderItems"></order-list>
            </div>
        </div>
        
        <div class="col-md-5">
            <h3>Menu Items</h3>
            <orderMenuItems 
            :items="menuItems"
            @menuItemAdded="handleNewMenuItem"></orderMenuItems>
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
            this.orderItems.forEach(order => {
                price = price + order.price;
            });
            return price;
        }
    },
    data(){
        return {
            menuItems: [],
            orderItems: [],
            originalMenuItems: []
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
            this.orderItems.unshift(menuitem);
        },

        handleFiltredList(filtredList){
            this.menuItems = filtredList;
        },

        handleClearFiltredList(){
            this.menuItems = this.originalMenuItems;
        }

    }
}
</script>