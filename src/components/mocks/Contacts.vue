<template>
  <h1>Contacts</h1>
  <!-- <router-link :to="{ name: 'vk' }">Vk page</router-link> -->
  <ul class="nav__list">
    <li
      class="nav__item"
      v-for="link in links"
      :key="link.id"
      @click="changePage(link.alias)"
    >
      {{ link.title }}
    </li>
  </ul>
  <router-view />
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      links: [
        {
          id: 0,
          title: "vk",
          alias: "vk",
        },
        {
          id: 1,
          title: "fb",
          alias: "fb",
        },
        {
          id: 2,
          title: "insta",
          alias: "insta",
        },
        {
          id: 3,
          title: "github",
          alias: "github",
        },
      ],
    };
  },
  methods: {
    changePage(name) {
      this.$router.push({ name });
    },
  },
};
</script>
