<template>
    <div>
        this is vuex {{count}}
        <div @click='add'> + </div>
        <div @click='jj'> - </div>
    </div>

</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {

        }
    },
    computed:mapState({
        count:state=>state.count

    }),
    methods: {
        add(){
            this.$store.commit('add',1)
        },
        jj(){
            this.$store.commit('jl',1)
        }
    },
}
</script>