<template>
    <div class="wrapper mb-3">
        <input type="text" v-model="searchString" placeholder="Search here..."  class="form-control">
    </div>
</template>

<script>
export default {
    props: ['items'],
    data(){
        return {
            searchString: ''
        }
    },
    computed: {
        filtredList(){
            return this.items.filter(item => {
                return item.name.toLowerCase().includes(this.searchString.toLowerCase());
            })
        }
    },
    watch: {
        searchString(value) {
            if(value != ''){
                window.eventBus.$emit('filtredList', this.filtredList);
            }else {
                window.eventBus.$emit('clearFiltredList');
            }
        }
    }
}
</script>