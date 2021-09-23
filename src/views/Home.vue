<template>
  <div>
    <navbar/>
    <div class="row d-flex justify-content-around align-items-center" style="padding:200px">
      <div class="col-md-3 ">
        <h3>Join or Create Conversation</h3>
        <div class="form-group">
          <label for="exampleFormControlInput1"></label>
          <input
            v-model="conversationId"
            type="text"
            class="form-control"
          />
          <button @click.prevent="joinChat" class="btn btn-primary">Submit</button>
        </div>
      </div>
      <div>
        <h3>Delete Conversation</h3>
        <div class="form-group">
          <label for="exampleFormControlInput1"></label>
          <input
            v-model="delConversationId"
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          <button @click.prevent="deleteChat" class="btn btn-primary">Submit</button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import swal from 'sweetalert'

export default {
  name: "Home",
  data: function(){
    return{
      conversationId : "",
      delConversationId: ""
    }
  },
  methods: {
    joinChat: function(){
      localStorage.setItem('conversationId', this.conversationId)
      // this.$store.dispatch()
      this.$router.push({name: "Chat"})
    },
    deleteChat: function(){
      this.$store.dispatch("deleteChat", this.delConversationId)
        .then(resp => {
          console.log(resp);
          const message = resp.data.message
          swal({
            text: message
          })
        })
        .catch( error => {
          swal({
            text: `${error.message}`

          })
        })
    }
  },
  components: {
    Navbar
  }
};
</script>
