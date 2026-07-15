<template>
  <main class="min-h-screen">
    <Analytics />
    <div class="space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects />
      <!-- Get in Touch Section -->
      <div class="mt-20 flex flex-col items-center justify-center">
        <span
          class="mb-2 rounded bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-700"
          >Let's Connect</span
        >
        <h2 class="mb-4 text-4xl font-extrabold">Get in Touch</h2>
        <p class="mb-8 max-w-2xl text-center text-xl text-gray-500">
          Have a project in mind or just want to chat? Feel free to reach
          out.<br />
        </p>
        <a
          href="https://www.linkedin.com/in/krishnapal-jadeja/"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white shadow transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          <Icon name="simple-icons:linkedin" class="mr-2 h-6 w-6" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { Analytics } from "@vercel/analytics/nuxt";
</script>
