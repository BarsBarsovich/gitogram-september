<template>
  <button class="button">{{ text || "Follow" }}</button>
</template>

<script>
export default {
  title: "xButton",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.button {
  min-width: 270px;
  min-height: 44px;
  outline: none;
  background: #31ae54;
  border: none;
  border-radius: 4px;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.button:hover {
  background: crimson;
}
</style>
