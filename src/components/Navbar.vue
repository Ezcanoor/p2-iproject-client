<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item dropdown ml-md-auto">
            <a
              class="nav-link dropdown-toggle"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              >Menu</a
            >
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a @click.prevent="logout" class="dropdown-item" href="#">Logout</a>
             
            </div>
          </li>
        </ul>
        <h3 class="text-muted text-center">Cheats-Chats</h3>
        <div class="row">
          <div class="col-md-12"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods:{
    logout: function(){
      localStorage.removeItem('access_token')
      localStorage.removeItem('id')
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      localStorage.removeItem('conversationId')

      this.$router.push({name: "Login"})
    }
  }
};
</script>

<style>
</style>