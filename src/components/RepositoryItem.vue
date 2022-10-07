<template>
  <div class="repository-item">
    <avatar
      :avatarUrl="'https://avatars.mds.yandex.net/i?id=3d55b5912a8a705f76220a22afcc5c5c-5843558-images-thumbs&n=13'"
      :nickname="'Peter'"
    />
    <div class="wrapper">
      <slot />
    </div>
    <Toggler @btnClick="onTogglerClick" />
    <MessageList v-if="isShowMessage" />
  </div>
</template>

<script>
import Toggler from "./Toggler.vue";
import MessageList from "./MessageList.vue";
import Avatar from "./avatar/avatar.vue";

export default {
  name: "RepositoryItem",
  components: { Toggler, MessageList, Avatar },
  data() {
    return {
      isShowMessage: true,
    };
  },
  methods: {
    onTogglerClick(isShow) {
      this.isShowMessage = isShow;
    },
  },
};
</script>

<style scoped>
.repository-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 979px;
}
</style>
