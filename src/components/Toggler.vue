<template>
  <button @click="btnClick">Message</button>
</template>

<script>
export default {
  name: "Toggler",
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    btnClick() {
      this.isActive = !this.isActive;
      this.$emit("btnClick", this.isActive);
    },
  },
};
</script>
