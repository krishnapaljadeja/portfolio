<template>
  <div class="space-y-6">
    <h2
      class="text-lg font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Connect with me
    </h2>
    <div class="flex flex-wrap gap-4">
      <UButton
        to="https://www.linkedin.com/in/krishnapal-jadeja/"
        target="_blank"
        color="gray"
        variant="ghost"
        class="border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-110"
      >
        <Icon name="simple-icons:linkedin" class="w-5 h-5 mr-2" />
        LinkedIn
      </UButton>
      <UButton
        to="https://github.com/krishnapaljadeja"
        target="_blank"
        color="gray"
        variant="ghost"
        class="border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-110"
      >
        <Icon name="simple-icons:github" class="w-5 h-5 mr-2" />
        GitHub
      </UButton>
      <UButton
        to="mailto:hello@krishnapaljadeja.com"
        color="gray"
        variant="ghost"
        class="border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-110"
      >
        <Icon name="mdi:email-outline" class="w-5 h-5 mr-2" />
        Email
      </UButton>
      <UButton
        to="/krishnapal-jadeja.pdf"
        target="_blank"
        color="gray"
        variant="ghost"
        class="border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-110"
      >
        <Icon name="mdi:file-document-outline" class="w-5 h-5 mr-2" />
        View Resume
      </UButton>
      <UButton
        to="tel:+918347036131"
        color="gray"
        variant="ghost"
        class="border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-110"
      >
        <Icon name="mdi:phone-outline" class="w-5 h-5 mr-2" />
        +91 8347036131
      </UButton>
    </div>
  </div>
</template>
