<template>
  <div
    :id="project.name.toLowerCase().replace(/\s+/g, '-')"
    class="group flex flex-col gap-2 p-4 rounded-lg shadow bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-105"
    :class="{ 'cursor-pointer': !isHomePage }"
    @click="!isHomePage && handleClick()"
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
        <span
          :class="[
            'px-2 py-1 text-xs font-medium rounded-full',
            project.status === 'Live'
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
          ]"
        >
          {{ project.status }}
        </span>
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
        <Icon
          v-if="!isHomePage"
          :name="isExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'"
          class="w-5 h-5 text-gray-400 transition-transform duration-300"
          :class="{ 'transform rotate-180': isExpanded }"
        />
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
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isExpanded" class="mt-4 space-y-2">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Key Features:
          </h4>
          <a
            v-if="project.url && project.url !== '#'"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 transition-colors"
          >
            <Icon name="mdi:web" class="w-4 h-4" />
            Visit Live Site
          </a>
        </div>
        <ul class="space-y-1">
          <li
            v-for="feature in project.features"
            :key="feature"
            class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
          >
            <Icon
              name="mdi:check-circle-outline"
              class="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0"
            />
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>
    </Transition>
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
  isPreExpanded: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();
const router = useRouter();
const isHomePage = computed(() => route.path === "/");
const isExpanded = ref(props.isPreExpanded);

function handleClick() {
  isExpanded.value = !isExpanded.value;
  // Update URL query when expanding/collapsing
  const projectId = props.project.name.toLowerCase().replace(/\s+/g, "-");
  if (isExpanded.value) {
    router.push({ query: { ...route.query, expand: projectId } });
  } else {
    const query = { ...route.query };
    delete query.expand;
    router.push({ query });
  }
}

// Watch for changes in isPreExpanded prop
watch(
  () => props.isPreExpanded,
  (newValue) => {
    isExpanded.value = newValue;
  }
);

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
