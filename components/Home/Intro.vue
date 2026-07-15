<template>
  <div class="space-y-10">
    <video
      class="w-full rounded-lg border border-gray-200 bg-gray-100 object-cover aspect-[16/4] dark:border-gray-800 dark:bg-gray-900"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-label="Portfolio banner animation"
    >
      <source src="/banner.webm" type="video/webm" />
    </video>

    <!-- Profile Section -->
    <div class="flex items-center gap-4 sm:gap-6">
      <NuxtImg
        src="/pfp.jpg"
        alt="Jadeja Krishnapal Singh"
        class="h-24 w-24 shrink-0 rounded-xl border border-gray-400 bg-gray-200 object-cover ring-4 ring-gray-300 transition-all duration-300 hover:ring-primary-400 dark:border-gray-600 dark:bg-gray-900 dark:ring-gray-700 sm:h-36 sm:w-36"
        sizes="96px sm:144px"
        placeholder
        format="webp"
      />
      <div class="min-w-0 space-y-1.5 sm:space-y-3">
        <!-- <Icon
          name="mdi:circle-half-full"
          class="h-4 w-4 text-gray-600 dark:text-gray-300 sm:h-5 sm:w-5"
        /> -->
        <h1
          class="text-2xl font-bold leading-tight tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl"
        >
          Jadeja Krishnapal Singh
        </h1>
        <p class="text-lg font-bold text-gray-500 dark:text-gray-500 sm:text-2xl">
          Full Stack Developer.
        </p>
        <p class="text-sm font-semibold text-gray-500 dark:text-gray-400 sm:text-base">
          Anand, Gujarat, IND
        </p>
      </div>
    </div>

    <!-- About Section -->
    <section class="space-y-4">
      <h2
        class="flex items-center gap-2 border-b border-gray-200 pb-1 text-2xl font-bold dark:border-gray-700"
      >
        <Icon name="mdi:account-outline" /> About
      </h2>
      <p class="text-gray-900 dark:text-gray-400">
        I'm a Full Stack Developer building backend systems, developer tools,
        and AI-powered products using TypeScript, Go, Node.js, React, and
        PostgreSQL.
      </p>
      <p class="text-gray-900 dark:text-gray-400">
        I secured 1st Runner-up at the Odoo x IIT Gandhinagar National Hackathon
        and ranked among the Top 7 finalists at the Odoo x NMIT Bengaluru
        Hackathon, demonstrating the ability to deliver production-ready
        solutions in competitive environments.
      </p>
    </section>

    <!-- Experience Section -->
    <section class="space-y-4">
      <h2
        class="flex items-center gap-2 border-b border-gray-200 pb-1 text-2xl font-bold dark:border-gray-700"
      >
        <Icon name="mdi:briefcase-outline" /> Experience
      </h2>
      <div class="space-y-3">
        <div
          v-for="role in experience"
          :key="role.company"
          class="rounded-lg border border-gray-100 bg-white p-4 shadow dark:border-gray-800 dark:bg-gray-900"
        >
          <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {{ role.company }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ role.title }} - {{ role.location }}
              </p>
            </div>
            <span class="shrink-0 text-sm font-medium text-gray-400">
              {{ role.period }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="space-y-4">
      <h2
        class="flex items-center gap-2 border-b border-gray-200 pb-1 text-2xl font-bold dark:border-gray-700"
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
          class="flex cursor-pointer items-center gap-4 rounded-lg bg-white p-4 shadow transition-transform duration-300 hover:scale-105 dark:bg-gray-900"
        >
          <img
            src="../content/charusat-logo.png"
            alt="CHARUSAT University"
            class="h-14 w-14 rounded-full border"
          />
          <div class="flex-1">
            <div class="text-lg font-semibold">CHARUSAT University</div>
            <div class="text-gray-600 dark:text-gray-400">
              B.Tech in Computer Engineering
            </div>
          </div>
          <div class="text-sm text-gray-400">2023 - 2027</div>
        </div>
      </a>
    </section>

    <!-- Skills & Technologies Section -->
    <section class="space-y-2">
      <h2
        class="border-b border-gray-200 pb-1 text-2xl font-bold dark:border-gray-700"
      >
        Skills & Technologies
      </h2>
      <p class="text-gray-700 dark:text-gray-300">
        A showcase of my technical expertise and professional toolkit. These are
        the technologies I regularly use in my development journey.
      </p>
      <div class="mt-4 space-y-4">
        <div v-for="group in skillGroups" :key="group.title">
          <div
            class="mb-2 flex items-center gap-2 font-semibold text-gray-700 dark:text-gray-300"
          >
            <Icon :name="group.icon" /> {{ group.title }}
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill.name"
              class="flex cursor-pointer items-center gap-1 rounded bg-gray-100 px-3 py-1 text-sm transition-transform duration-300 hover:scale-110 dark:bg-gray-800"
            >
              <Icon :name="skill.icon" /> {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Jadeja Krishnapal Singh",
  description:
    "Full Stack Developer specializing in MERN & PERN stacks, with expertise in web development and AI. Currently pursuing B.Tech in Computer Engineering at Charusat University.",
});

const experience = [
  {
    company: "Eli Lilly Services India Pvt. Ltd.",
    title: "Product Software Developer Intern",
    location: "Bengaluru, India",
    period: "Jun 2026 - Present",
  },
  {
    company: "Redhawk Consultancy",
    title: "Full Stack SDE Intern",
    location: "Remote",
    period: "Nov 2025 - Apr 2026",
  },
  {
    company: "Charusat University",
    title: "Backend Developer Intern",
    location: "Remote",
    period: "May 2025 - Jul 2025",
  },
];

const skillGroups = [
  {
    title: "Languages & Core",
    icon: "mdi:code-tags",
    skills: [
      { name: "JavaScript", icon: "simple-icons:javascript" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Go lang", icon: "simple-icons:go" },
      { name: "C", icon: "simple-icons:c" },
      { name: "C++", icon: "simple-icons:cplusplus" },
      { name: "DSA", icon: "mdi:chart-bubble" },
    ],
  },
  {
    title: "Frameworks",
    icon: "mdi:atom-variant",
    skills: [
      { name: "Node.js", icon: "simple-icons:nodedotjs" },
      { name: "Express.js", icon: "simple-icons:express" },
      { name: "React.js", icon: "simple-icons:react" },
      { name: "HTML5", icon: "simple-icons:html5" },
      { name: "CSS3", icon: "simple-icons:css3" },
    ],
  },
  {
    title: "Tools",
    icon: "mdi:tools",
    skills: [
      { name: "MongoDB", icon: "simple-icons:mongodb" },
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
      { name: "Socket.IO", icon: "simple-icons:socketdotio" },
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "Sequelize", icon: "simple-icons:sequelize" },
      { name: "Docker", icon: "simple-icons:docker" },
      { name: "Git", icon: "simple-icons:git" },
      { name: "GitHub", icon: "simple-icons:github" },
      { name: "Postman", icon: "simple-icons:postman" },
    ],
  },
];
</script>
