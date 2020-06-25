<template>
    <div class="row">
        <div class="col-md-7">
            <h3>Customer details</h3>
            <order-form></order-form>
        </div>
        
        <div class="col-md-5">
            <h3>Menu</h3>
            <order-menu-items :items="menuItems"></order-menu-items>
        </div>

    </div>
</template>

<script>
import OrderForm from './OrderForm';
import OrderMenuItems from './OrderMenuItems';
import axios from 'axios';

export default {
    props: ['restoId'],
    components: {
        OrderForm,
        OrderMenuItems
    },
    created(){
        this.loadRestoMenuItems();
    },
    data(){
        return {
            menuItems: []
        }
    },
    methods: {
        loadRestoMenuItems() {
            let postData = {restoId: this.restoId}
            axios.post('/api/resto/menu', postData)
            .then(response => console.log('response', this.menuItems = response.data))
            .catch(error => console.error(error.response));
    }

    }
}
</script>