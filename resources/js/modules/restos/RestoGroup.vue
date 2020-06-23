<template>
  <div class="resto-group__wrapper mb-5">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="resto in restos" :key="resto.id">
        <card-component>
          <template slot="title">{{resto.name}}</template>
          <template slot="main">{{resto.location}}</template>
        </card-component>
      </div>
      <div class="col-md-4" v-if="showAddForm">
        <card-component>
          <template slot="title">Add new Restaurant</template>
          <template slot="main">+</template>
        </card-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['restos'],
  created() {
    console.log('this.restos.length', this.restos.length);
  },
  computed: {
    showAddForm() {
      return (this.restos.length < 5) ? true : false;
    }
  },
  data() {
    return {}
  }
}
</script>
