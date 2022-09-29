<template>
  <div class="repository-list">
    <div class="repository-list__container">
      <RepositoryItem v-for="n in 5" :key="n">
        <div class="wrappper">
          <RepositoryDescription
            :reponame="'test'"
            :repodescription="'desc'"
            :likesCount="4"
            :followers="7"
          />
        </div>
      </RepositoryItem>
    </div>
  </div>
</template>

<script>
import RepositoryItem from "@/components/RepositoryItem";
import RepositoryDescription from "./RepositoryDescription";

export default {
  name: "RepositoryList",
  components: {
    RepositoryItem,
    RepositoryDescription,
  },
};
</script>

<style scoped>
.repository-list {
  background: #fff;
}
.repository-list__container {
  width: 980px;
  margin: 0 auto;
}
</style>
