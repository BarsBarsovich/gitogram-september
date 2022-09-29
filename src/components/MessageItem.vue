<template>
  <div class="message">
    <p class="message__name">{{ name }}</p>
    <p class="message__text">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: ["name", "message"],
};
</script>

<style>
.message {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.message__text {
  margin-left: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: red;
}

.message__name {
  font-weight: 700;
  font-size: 14px;
  color: red;
}
</style>
