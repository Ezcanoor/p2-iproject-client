<template>
  <div id="talkjs-container" style="width: 90%; margin: 30px; height: 500px">
    <i>Loading chat...</i>
  </div>
</template>

<script>
import Talk from 'talkjs';
export default {
  data: function(){
    return{

    }
  },
  mounted: function() {
    Talk.ready.then(function() {
      const conversationId = localStorage.getItem('conversationIdd')
      const id = localStorage.getItem('id')
      const name = localStorage.getItem('name')
      const email = localStorage.getItem('email')

      const me = new Talk.User({
          id,
          name,
          email
      });
      const talkSession = new Talk.Session({
      appId: 'tFEb2D5i',
      me: me,
      });
      const conversation = talkSession.getOrCreateConversation(`${conversationId}`);
      conversation.setParticipant(me);
      const inbox = talkSession.createInbox({ selected: conversation });
      inbox.mount(document.getElementById('talkjs-container'));

    })
  }
}
</script>

<style>

</style>