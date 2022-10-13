<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from './components/mocks/Navigation.vue';
export default {
  name: "App",
  components: { Navigation },
};
</script>

<style>
html,
body {
  height: 100%;
}

body {
  margin: 0;
}

p {
  margin: 0;
}

#app {
  height: 100px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

ul, li {
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
