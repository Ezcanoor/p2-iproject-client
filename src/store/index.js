import Vue from 'vue'
import Vuex from 'vuex'
import serverAPI from '../apis/serverAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
    id: ""
  },
  mutations: {
    SET_ISLOGIN: function(state, status){
      state.isLogin = status
    }
  },
  actions: {
    login: function( _ , payload){
      return serverAPI.post('/login', payload)
    },
    register: function( _ , payload){
      return serverAPI.post('/register', payload)
    },
    deleteChat: function( _ , payload){
      const token = localStorage.getItem('access_token')
      return serverAPI.delete(
        '/conversation/delete', 
        {conversationId: payload},
        { headers:{
            access_token: token
          }
        }
      )
    },
    loginOath: function(nul, idToken){
      return serverAPI.post('/googlesignin', {token: idToken})
    },
  },
  modules: {
  }
})
