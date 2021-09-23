import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Chat from '../views/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next){
      const token = localStorage.getItem('access_token')
      if(to.name === "Home" && !token){
        next({name: 'Login'})
      }
      else {
        next()
      }
    }
  },{
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next){
      const token = localStorage.getItem('access_token')
      if(to.name === "Login" && token){
        next({name: 'Home'})
      }
      else {
        next()
      }
    }
  },{
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter(to, from, next){
      const token = localStorage.getItem('access_token')
      if(to.name === "Register" && token){
        next({name: 'Home'})
      }
      else {
        next()
      }
    }
  },{
    path: '/chat',
    name: 'Chat',
    component: Chat,
    beforeEnter(to, from, next){
      const token = localStorage.getItem('access_token')
      if(to.name === "Chat" && !token){
        next({name: 'Login'})
      }
      else {
        next()
      }
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
