<template>
  <div class="container mx-auto p-6 max-w-2xl">
    <NuxtLink
      to="/posts"
      class="text-blue-500 hover:underline flex items-center"
    >
      <Icon name="mdi:arrow-left" class="mr-2" /> Back to Posts
    </NuxtLink>

    <!-- Skeleton Loader -->
    <div
      v-if="!post"
      class="mt-6 p-6 border rounded-lg shadow-lg animate-pulse"
    >
      <div class="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div class="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div class="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div class="h-4 bg-gray-300 rounded w-2/3"></div>
    </div>

    <!-- Post Content -->
    <div v-else class="mt-6 p-6 border rounded-lg shadow-lg bg-white">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-600 text-lg leading-relaxed">{{ post.body }}</p>

      <!-- Reactions -->
      <div class="flex items-center space-x-4 mt-4 text-gray-700">
        <div class="flex items-center">
          <Icon name="mdi:thumb-up" class="mr-1 text-green-500" />
          <span>{{ post.reactions.likes }}</span>
        </div>
        <div class="flex items-center">
          <Icon name="mdi:thumb-down" class="mr-1 text-red-500" />
          <span>{{ post.reactions.dislikes }}</span>
        </div>
        <div class="flex items-center">
          <Icon name="mdi:eye" class="mr-1 text-blue-500" />
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
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { usePostsStore } from "~/store/posts";

const route = useRoute();
const store = usePostsStore();
const post = ref(null);

useHead({ title: "Post Details" });

onMounted(async () => {
  const cachedPost = store.posts?.find((p) => p.id == route.params.id);

  if (cachedPost) {
    post.value = cachedPost;
  } else {
    try {
      const res = await fetch(`https://dummyjson.com/posts/${route.params.id}`);
      if (!res.ok) throw new Error("Post not found");
      post.value = await res.json();
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  }
});
</script>
