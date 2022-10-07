import avatar from "./avatar.vue";

export default {
  title: "avatar",
  components: { avatar },
};

export const defaultView = () => ({
  components: { avatar },
  template: ` <avatar
    avatarUrl="https://avatars.mds.yandex.net/i?id=3d55b5912a8a705f76220a22afcc5c5c-5843558-images-thumbs&n=13"
    nickname="Peter"
  />
`,
});

defaultView.story = {
  name: "Стандартный вид",
};
