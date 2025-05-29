<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
        :is-pre-expanded="isProjectExpanded(project.name)"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that picks your interest, check out the code and contribute if you have ideas for how it can be improved.";
useSeoMeta({
  title: "Jadeja Krishnapal Singh",
  description,
});

const route = useRoute();
const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);

function isProjectExpanded(projectName) {
  const projectId = projectName.toLowerCase().replace(/\s+/g, "-");
  return route.query.expand === projectId;
}
</script>
