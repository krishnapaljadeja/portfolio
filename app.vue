<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppBackgroundPixelStars />
  <div class="relative z-10">
    <AppNavbar />
    <div class="h-32"></div>
    <UContainer>
      <NuxtPage />
    </UContainer>
    <div class="h-32"></div>
    <AppFooter />
    <AppBackToTop />
  </div>
</template>

<script setup>
const colorMode = useColorMode();

if (!colorMode.preference || colorMode.preference === "system") {
  colorMode.preference = "dark";
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
