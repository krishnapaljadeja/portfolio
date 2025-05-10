<template>
  <div
    :id="project.name.toLowerCase().replace(/\s+/g, '-')"
    class="group flex flex-col gap-2 p-4 rounded-lg shadow bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-105"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Icon
          :name="project.icon || 'mdi:folder-outline'"
          class="w-7 h-7 text-primary-500"
        />
        <h3 class="text-lg font-semibold group-hover:text-primary-600">
          {{ project.name }}
        </h3>
      </div>
      <div class="flex items-center gap-2">
        <template v-if="project.url && project.url !== '#'">
          <a
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="text-gray-500 hover:text-primary-500 transition-colors"
            @click.stop
          >
            <Icon name="mdi:web" class="w-6 h-6" />
          </a>
        </template>
        <template v-if="project.github">
          <a
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="text-gray-500 hover:text-primary-500 transition-colors"
            @click.stop
          >
            <Icon name="simple-icons:github" class="w-6 h-6" />
          </a>
        </template>
      </div>
    </div>
    <p class="text-gray-500 dark:text-gray-400 text-sm mb-2">
      {{ project.description }}
    </p>
    <div class="flex flex-wrap gap-2 mt-2">
      <span
        v-for="tech in project.techStack"
        :key="tech"
        class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-xs"
      >
        <Icon :name="iconForTech(tech)" class="w-4 h-4" />
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  to: {
    type: String,
    default: null,
  },
});

// Map tech names to icon names
function iconForTech(tech) {
  const map = {
    "React.js": "simple-icons:react",
    "Node.js": "simple-icons:nodedotjs",
    "Express.js": "simple-icons:express",
    MongoDB: "simple-icons:mongodb",
    PostgreSQL: "simple-icons:postgresql",
    MySQL: "simple-icons:mysql",
    EJS: "simple-icons:ejs",
    TailwindCSS: "simple-icons:tailwindcss",
    Prisma: "simple-icons:prisma",
    Sequelize: "simple-icons:sequelize",
    "REST APIs": "mdi:api",
    "Socket.IO": "simple-icons:socketdotio",
    Docker: "simple-icons:docker",
    Python: "simple-icons:python",
    Java: "simple-icons:java",
    "C++": "simple-icons:cplusplus",
    C: "simple-icons:c",
    HTML5: "simple-icons:html5",
    CSS3: "simple-icons:css3",
  };
  return map[tech] || "mdi:code-tags";
}
</script>
