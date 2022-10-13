<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/contacts">Contacts</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="nav__item">
        <router-link :to="{ name: 'Params', params: { id: '435435' } }">
          Params
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  width: 400px;
  margin: 20px auto;
}

.router-link-active {
  color: red;
}
.router-link-exact-active {
  color: #42b983;
}

.nav + a {
  font-weight: bold;
  color: #2c3e58;
}

.nav__list {
  display: flex;
  justify-content: space-between;
}
</style>
