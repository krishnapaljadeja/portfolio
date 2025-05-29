<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      FEATURED PROJECTS
    </h2>
    <div class="space-y-4">
      <div
        v-for="(project, id) in projects"
        :key="id"
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
  queryContent("/projects").limit(3).find()
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
