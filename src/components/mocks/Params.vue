<template>
  <h1>Params page</h1>
  {{ params_id }}
</template>

<script>
export default {
  name: "Params",
  data() {
    return {
      params_id: this.$route.params.id,
    };
  },
};
</script>
