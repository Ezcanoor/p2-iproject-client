<template>
  <div class="row">
    <div class="col-md-12">
      <h3 class="text-center">Register Page</h3>
      <div style="padding:20px;">
        <form role="form">
          <div class="form-group">
            <label for="exampleInputEmail1"> Name </label>
            <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1"> Email address </label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"> Password </label>
            <input
            v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1"> Gender </label>
            <input v-model="gender" type="tex" class="form-control" id="exampleInputEmail1" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1"> State </label>
            <input v-model="state" type="text" class="form-control" id="exampleInputEmail1" />
          </div>
          <div class="d-flex justify-content-center">
            <button @click.prevent="register" type="submit" class="btn btn-primary" >Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: "Register",
  data: function (){
    return{
      email: "",
      name: "",
      password: "",
      gender: "",
      state: ""
    }
  },
  methods: {
    register: function(){
      
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        gender: this.gender,
        state: this.state
      }
      this.$store.dispatch('register', payload)
        .then(() => {
          swal({
            text: 'success created user'
          })
        })
        .catch(() => {
          swal({
            text: 'error creating user'
          })
        })
    }
  }
};
</script>

<style>
</style>