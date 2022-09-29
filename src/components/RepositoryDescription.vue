<template>
  <h1>{{ reponame }}</h1>
  <p>{{ repodescription }}</p>
  <RepositoryInfo :likesCount="likesCount" :followers="followers" />
</template>

<script>
import RepositoryInfo from "./RepositoryInfo";
export default {
  name: "RepositoryDescription",
  props: ["reponame", "repodescription", "likesCount", "followers"],
  components: {
    RepositoryInfo,
  },
};
</script>
