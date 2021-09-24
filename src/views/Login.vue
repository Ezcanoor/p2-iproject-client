<template>
  <div class="row">
			<div class="col-md-12">
				<h3 class="text-center">
					Login Page
				</h3>
				<div class="row">
					<div class="col-md-8">
						<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg">
					</div>
					<div class="col-md-4" style="padding:100px">
						<form role="form">
							<div class="form-group">
								<label for="exampleInputEmail1">
									Email Address
								</label>
								<input v-model="email" type="email" class="form-control" id="exampleInputEmail1">
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">
									Password
								</label>
								<input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
							</div>
							<button @click.prevent="login" type="submit" class="btn btn-primary">
								Submit
							</button>
						</form>
            <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
  name: 'Login',
  data: function(){
    return{
      email: "",
      password: "",
      clientId: "12246335717-ielgple4crof3sblf7pkns7r4lgvhda5.apps.googleusercontent.com"
    }
  },
   directives: {
    GoogleSignInButton
  },
  methods:{
    login: function(){
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(resp => {
          const token = resp.data.access_token
          localStorage.setItem('access_token', token)
          localStorage.setItem('id', resp.data.id)
          localStorage.setItem('email', resp.data.email)
          localStorage.setItem('name', resp.data.name)

          this.$store.commit('SET_ISLOGIN', true)
          this.$router.push({name: 'Home'})
        })
        .catch(err => {
          console.log(err);
        })
    },
    OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend'
      this.$store.dispatch('loginOath', idToken)
        .then(resp => {
          localStorage.setItem('access_token', resp.data.access_token)
          localStorage.setItem('id', resp.data.id)
          localStorage.setItem('email', resp.data.email)
          localStorage.setItem('name', resp.data.name)
          this.$store.commit('SET_ISLOGIN',true)
          this.$router.push({name:'Home'})
        })
        .catch(err => {
          console.log(err);
        })
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
    
  }
}
</script>

<style>

</style>