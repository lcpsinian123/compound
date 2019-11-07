import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:5
    },
    mutations:{
        add(state){
            
            state.count++;
            
        },
        jl(state){
            state.count--
        }
      
    }  
    
})

