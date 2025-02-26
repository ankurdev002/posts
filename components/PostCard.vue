<template>
  <div
    class="p-5 border rounded-2xl shadow-md hover:shadow-lg transition bg-white"
  >
    <NuxtLink :to="`/posts/${post.id}`" class="block">
      <!-- Post Title -->
      <h2 class="text-xl font-bold text-gray-900 mb-2">
        {{ post.title }}
      </h2>

      <!-- Post Body (Snippet) -->
      <p class="text-gray-600 mb-3">{{ post.body.substring(0, 100) }}...</p>

      <!-- Reactions & Views -->
      <div class="flex items-center space-x-4 text-gray-500 text-sm">
        <div class="flex items-center space-x-1">
          <Icon
            name="heroicons:hand-thumb-up-solid"
            class="text-green-500 w-5 h-5"
          />
          <span>{{ post.reactions.likes }}</span>
        </div>
        <div class="flex items-center space-x-1">
          <Icon
            name="heroicons:hand-thumb-down-solid"
            class="text-red-500 w-5 h-5"
          />
          <span>{{ post.reactions.dislikes }}</span>
        </div>
        <div class="flex items-center space-x-1">
          <Icon name="heroicons:eye-solid" class="text-blue-500 w-5 h-5" />
          <span>{{ post.views }}</span>
        </div>
      </div>

      <!-- Tags -->
      <div class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="(tag, index) in post.tags"
          :key="index"
          class="text-xs font-semibold text-white bg-blue-600 px-2 py-1 rounded-full"
        >
          #{{ tag }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ post: Object });
</script>
