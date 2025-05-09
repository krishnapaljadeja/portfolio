<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
  >
    <UContainer>
      <div class="flex items-center justify-between h-16">
        <NuxtLink
          to="/"
          class="text-lg font-bold text-gray-900 dark:text-white"
        >
          Jadeja Krishnapal Singh
        </NuxtLink>
        <nav class="flex items-center gap-6">
          <NuxtLink
            to="/"
            class="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Projects
          </NuxtLink>
          <AppThemeToggle />
        </nav>
      </div>
    </UContainer>
  </header>
</template>

<script setup>
import { useFixedHeader } from "vue-use-fixed-header";
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);

const items = [
  { name: "Home", path: "/", icon: "solar:home-smile-outline" },
  {
    name: "Projects",
    path: "/projects",
    icon: "solar:folder-with-files-outline",
  },
];
</script>
