<template>
  <div class="space-y-6">
    <h2
      class="text-lg font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Connect with me
    </h2>
    <div class="flex flex-wrap gap-4">
      <UButton
        to="https://www.linkedin.com/in/krishnapal-jadeja-39a4ab1b7/"
        target="_blank"
        color="gray"
        variant="ghost"
        class="transition-transform duration-300 hover:scale-110"
      >
        <Icon name="simple-icons:linkedin" class="w-5 h-5 mr-2" />
        LinkedIn
      </UButton>
      <UButton
        to="https://github.com/krishnapaljadeja"
        target="_blank"
        color="gray"
        variant="ghost"
        class="transition-transform duration-300 hover:scale-110"
      >
        <Icon name="simple-icons:github" class="w-5 h-5 mr-2" />
        GitHub
      </UButton>
      <UButton
        to="mailto:jadejakrishnapal.ce@gmail.com"
        color="gray"
        variant="ghost"
        class="transition-transform duration-300 hover:scale-110"
      >
        <Icon name="mdi:email-outline" class="w-5 h-5 mr-2" />
        Email
      </UButton>
      <UButton
        to="tel:+918347036131"
        color="gray"
        variant="ghost"
        class="transition-transform duration-300 hover:scale-110"
      >
        <Icon name="mdi:phone-outline" class="w-5 h-5 mr-2" />
        +91 8347036131
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "Twitter",
    url: "https://twitter.com/fayazara",
    icon: "mdi:twitter",
  },
  {
    name: "GitHub",
    url: "https://github.com/fayazara",
    icon: "mdi:github",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/fayaz-aralikatti/",
    icon: "mdi:linkedin",
  },
  {
    name: "Telegram",
    url: "https://t.me/fayazara",
    icon: "mdi:telegram",
  },
];
</script>
