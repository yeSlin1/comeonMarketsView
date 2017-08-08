import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    username:"亲,请登录",
    shopcarcount:""
  },
  mutations:{
    login(state,msg){
      state.username=msg
    }
  }
})
export default store
