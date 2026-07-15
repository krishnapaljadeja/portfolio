<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-gray-50/85 backdrop-blur-lg transition-colors duration-300 dark:border-gray-800 dark:bg-black/85"
  >
    <UContainer>
      <div class="flex h-16 items-center justify-between gap-4">
        <NuxtLink
          to="/"
          class="shrink-0 text-lg font-bold text-gray-900 transition-colors duration-300 dark:text-white"
        >
          <span class="sm:hidden">KJ</span>
          <span class="hidden sm:inline">Jadeja Krishnapal Singh</span>
        </NuxtLink>
        <nav class="flex items-center gap-3 sm:gap-6">
          <NuxtLink
            to="/"
            class="text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Projects
          </NuxtLink>
          <NuxtLink
            to="/krishnapal-jadeja.pdf"
            target="_blank"
            class="hidden text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white sm:inline"
          >
            Resume
          </NuxtLink>
          <AppThemeToggle />
        </nav>
      </div>
    </UContainer>
  </header>
</template>
