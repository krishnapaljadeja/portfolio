<template>
  <div class="space-y-10">
    <!-- About Section (Restored) -->
    <div class="space-y-6">
      <NuxtImg
        src="/krishna.png"
        alt="Jadeja Krishnapal Singh"
        class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
        sizes="48px sm:64px"
        placeholder
        format="webp"
      />
      <h1
        class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
      >
        Hello!
      </h1>
      <p class="text-gray-900 dark:text-gray-400">
        I'm Jadeja Krishnapal Singh, a Full Stack Developer based in Anand,
        Gujarat. I specialize in building robust web applications using the MERN
        and PERN stacks, with a solid foundation in C++, DSA, and a growing
        passion for AI.
      </p>
      <p class="text-gray-900 dark:text-gray-400">
        I secured 1st Runner-up at the Odoo × IIT Gandhinagar National Hackathon
        and ranked among the Top 7 finalists at the Odoo × NMIT Bengaluru
        Hackathon, demonstrating the ability to deliver production-ready
        solutions in competitive environments.
      </p>
    </div>

    <!-- Education Section -->
    <section class="space-y-4">
      <h2
        class="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-1 flex items-center gap-2"
      >
        <Icon name="mdi:school-outline" /> Education
      </h2>
      <a
        href="https://www.charusat.ac.in/"
        target="_blank"
        rel="noopener"
        class="block"
      >
        <div
          class="flex items-center gap-4 bg-white dark:bg-gray-900 rounded-lg shadow p-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src="../content/charusat-logo.png"
            alt="CHARUSAT University"
            class="h-14 w-14 rounded-full border"
          />
          <div class="flex-1">
            <div class="font-semibold text-lg">CHARUSAT University</div>
            <div class="text-gray-600 dark:text-gray-400">
              B.Tech in Computer Engineering
            </div>
          </div>
          <div class="text-gray-400 text-sm">2023 - 2027</div>
        </div>
      </a>
    </section>

    <!-- Skills & Technologies Section -->
    <section class="space-y-2">
      <h2
        class="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-1"
      >
        Skills & Technologies
      </h2>
      <p class="text-gray-700 dark:text-gray-300">
        A showcase of my technical expertise and professional toolkit. These are
        the technologies I've mastered and regularly use in my development
        journey.
      </p>
      <div class="space-y-4 mt-4">
        <div>
          <div
            class="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300 font-semibold"
          >
            <Icon name="mdi:code-tags" /> Languages & Core
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:javascript" /> JavaScript
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:typescript" /> TypeScript
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:c" /> C
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:cplusplus" /> C++
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="mdi:chart-bubble" /> DSA
            </span>
          </div>
        </div>
        <div>
          <div
            class="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300 font-semibold"
          >
            <Icon name="mdi:atom-variant" /> Frameworks
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:nodedotjs" /> Node.js
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:express" /> Express.js
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:react" /> React.js
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:html5" /> HTML5
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:css3" /> CSS3
            </span>
          </div>
        </div>
        <div>
          <div
            class="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300 font-semibold"
          >
            <Icon name="mdi:tools" /> Tools
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:mongodb" /> MongoDB
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:postgresql" /> PostgreSQL
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:socketdotio" /> Socket.IO
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:prisma" /> Prisma
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:sequelize" /> Sequelize
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:docker" /> Docker
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:git" /> Git
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:github" /> GitHub
            </span>
            <span
              class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-sm transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Icon name="simple-icons:postman" /> Postman
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Resume Button Only -->
    <div class="flex gap-4 mt-6">
      <UButton
        to="/krishnapal-jadeja.pdf"
        target="_blank"
        color="primary"
        variant="solid"
        class="transition-transform duration-300 hover:scale-110"
      >
        <Icon name="mdi:eye-outline" class="w-5 h-5 mr-2" />
        View Resume
      </UButton>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Jadeja Krishnapal Singh",
  description:
    "Full Stack Developer specializing in MERN & PERN stacks, with expertise in web development and AI. Currently pursuing B.Tech in Computer Engineering at Charusat University.",
});
</script>
