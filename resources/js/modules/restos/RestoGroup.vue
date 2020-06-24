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
          <template slot="main">
            <span @click="handleAddNewResto">+</span>
          </template>
        </card-component>
        <modal name="add-new-resto" height="50%">
          <div class="container-padding">
            <resto-add-form 
            @addRestoEvent="handleSaveResto"
            @modalCancel="handleCancelResto"></resto-add-form>
          </div>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import RestoAddForm from './RestoAddForm.vue';

export default {
  components: {
    RestoAddForm
  },
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
  },
  methods: {
    handleAddNewResto(){
      this.$modal.show('add-new-resto');
    },
    handleCancelResto(){
      console.log('i was clicked');
    },
    handleSaveResto(restoData){
      console.log('restodata', restoData);
    }
  }
}
</script>
