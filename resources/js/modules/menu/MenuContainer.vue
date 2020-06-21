<template>
    <div class="wrapper menu__container">
        <div class="row">
            <div class="col-md-8">
                <card-component>
                    <template slot="title">my Menu items</template>
                    <template slot="body">Content will come here</template>
                </card-component>
            </div>
            
            <div class="col-md-4">
                <card-component>
                    <template slot="title">Add Menu items</template>
                    <template slot="body">From will come here</template>
                </card-component>
            </div>
        </div>
    </div>
</template>
    
<script>
    export default {
        props: ['items']
    }
</script>
