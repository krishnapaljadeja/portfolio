<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      FEATURED PROJECTS
    </h2>
    <div class="space-y-4">
      <NuxtLink
        v-for="(project, id) in projects"
        :key="id"
        to="/projects"
        class="block group"
      >
        <AppProjectCard :project="project" />
      </NuxtLink>
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
</script>
