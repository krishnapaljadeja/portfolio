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
          class="mb-2 px-4 py-1 rounded bg-gray-100 text-gray-700 text-sm font-semibold"
          >Let's Connect</span
        >
        <h2 class="text-4xl font-extrabold mb-4">Get in Touch</h2>
        <p class="text-gray-500 text-xl mb-8 text-center max-w-2xl">
          Have a project in mind or just want to chat? Feel free to reach
          out.<br />
        </p>
        <a
          href="https://www.linkedin.com/in/krishnapal-jadeja-39a4ab1b7/"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white text-lg font-semibold shadow hover:bg-gray-800 transition-colors"
        >
          <Icon name="simple-icons:linkedin" class="w-6 h-6 mr-2" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { Analytics } from "@vercel/analytics/nuxt";
</script>
