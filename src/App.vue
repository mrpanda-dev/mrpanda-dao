<template>
  <div class="app-container"><router-view /></div>
</template>
<script setup>
import { onMounted } from "vue";
const setSafeVh = () => {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
};
onMounted(() => {
  setSafeVh();
  window.addEventListener("resize", setSafeVh);
});
</script>
<style scoped>
.app-container {
  width: 100%;
  height: 100dvh;
  padding-bottom: env(safe-area-inset-bottom);
  padding-top: env(safe-area-inset-top);
  box-sizing: border-box;

  /* 兼容老版本 */
  @supports not (height: 100dvh) {
    height: calc(var(--vh, 1vh) * 100);
  }
}
</style>
