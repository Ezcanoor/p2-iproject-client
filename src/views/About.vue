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
        var me = new Talk.User({
            id: "20",
            name: "muzani",
            email: "muzani@mail.com",
        });

        if(!window.talkSession){
          window.talkSession = new Talk.Session({
          appId: 'tFEb2D5i',
          me: me,
          });
        }
        var other = new Talk.User({
            id: "21",
            name: "syukur",
            email: "syukur@mail.com",
        });
        var conversation = window.talkSession.getOrCreateConversation(
          Talk.oneOnOneId(me, other)
        );
        conversation.setParticipant(me);
        conversation.setParticipant(other);
        var inbox = window.talkSession.createInbox({ selected: conversation });
        inbox.mount(document.getElementById('talkjs-container'));

    })
  }
}
</script>

<style>

</style>