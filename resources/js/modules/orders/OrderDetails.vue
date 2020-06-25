<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(orderDetails, key) in orderDetails" :key="key">
            {{orderDetails.name}} <span class="float-right">{{orderDetails.price}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['orderDetails']
}
</script>