<template>
  <div class="repository-list">
    <div class="repository-list__container">
      <RepositoryItem key="0">
        <div class="wrapppe">
          <RepositoryDescription />
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
