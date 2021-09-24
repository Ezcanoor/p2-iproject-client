<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>


<script>
export default {
  created(){
    const token = localStorage.getItem('access_token')
    if(token){
      this.$store.commit('SET_ISLOGIN', true)
    }
  }
}
</script>

<style>

</style>

<style>

</style>
