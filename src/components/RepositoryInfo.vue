<template>
  <h1>{{ likesCount }}</h1>
  <h1>{{ followers }}</h1>
</template>

<script>
export default {
  name: "RepositoryInfo",
  props: ["likesCount", "followers"],
};
</script>
