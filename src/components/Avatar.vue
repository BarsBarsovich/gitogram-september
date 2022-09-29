<template>
  <div class="avatar">
    <div class="avatar__logo">
      <img :src="avatarUrl" alt="" class="avatar__logo-img" />
    </div>
    <div class="avatar__text">
      <p>{{ nickname }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["avatarUrl", "nickname"],
};
</script>

<style scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.avatar__logo-img {
  height: 44px;
  width: 44px;
  border-radius: 50%;
  margin-right: 14px;
}
</style>
