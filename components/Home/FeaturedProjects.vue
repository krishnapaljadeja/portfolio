<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      FEATURED PROJECTS
    </h2>
    <div class="space-y-4">
      <div
        v-for="project in featuredProjects"
        :key="project._path"
        @click.stop="navigateToProject(project.name)"
      >
        <AppProjectCard :project="project" />
      </div>
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Projects &rarr;"
        to="/projects"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: projects } = await useAsyncData("projects-home", () =>
  queryContent("/projects").find()
);

const featuredProjects = computed(() =>
  [...(projects.value || [])]
    .sort((a, b) => Number(a.order || 99) - Number(b.order || 99))
    .slice(0, 3)
);

const router = useRouter();

function navigateToProject(projectName: string) {
  const projectId = projectName.toLowerCase().replace(/\s+/g, "-");
  router.push({
    path: "/projects",
    query: { expand: projectId },
  });
}
</script>
