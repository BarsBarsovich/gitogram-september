<template>
  <div class="slider">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style scoped>
.slider {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
