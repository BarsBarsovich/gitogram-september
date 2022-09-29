<template>
  <MessageItem
    v-for="message in messageList"
    :key="message.id"
    :name="message.name"
    :message="message.message"
  />
</template>

<script>
import MessageItem from "./MessageItem.vue";
import message from "./message.json";

export default {
  name: "MessageList",
  components: { MessageItem },
  data() {
    return {
      messageList: message,
    };
  },
};
</script>
