<template>
  <table class="table table-hover table-bordered table-striped">
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Customer details</th>
        <th>Actions</th>
      </tr>
    </thead>
    
    <order-items 
      :orders="orders.data" 
      @onComplete="handleOrderComplete" 
      @onDelete="handleOrderDelete"></order-items>

  </table>
</template>

<script>
import OrderItems from './../../components/OrderItems';
import axios from 'axios';

export default {
  props: ["orders"],
  components: {
      OrderItems
  },
  data() {
    return {
      localOrders: null
    }
  },
  created() {
    this.localOrders = this.orders;
  },
  methods: {
    handleOrderComplete(order){
      if (!confirm("are you sure order is complete ?")){
        return ;
      }
      const postData = { order_id: order.id };
      axios.post("/api/order/complete", postData).then(response => {
        this.localOrders.data.forEach((order, index) =>{
          if (order.id === response.data.id){
            this.localOrders.data[index].isComplete = 1;
          }
        })
      });
    },

    handleOrderDelete(order){
      if (!confirm("are you sure want to delete the order ?")){
        return ;
      }
      const postData = { order_id: order.id };
      axios.post("/api/order/remove", postData).then(response => {
        this.localOrders.data = this.localOrders.data.filter(localOrder => {
          return localOrder.id !== order.id;
        })
      });
    }
  }
};
</script>
