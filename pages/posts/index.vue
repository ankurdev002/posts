<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Posts</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Show Skeletons while loading -->
      <template v-if="store.posts === null">
        <div v-for="i in 6" :key="i" class="p-4 border rounded-lg shadow-lg">
          <div class="h-6 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
          <div class="h-4 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
          <div class="flex space-x-4">
            <div class="h-5 w-5 bg-gray-300 rounded-full animate-pulse"></div>
            <div class="h-5 w-5 bg-gray-300 rounded-full animate-pulse"></div>
            <div class="h-5 w-5 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
          <div class="mt-3 flex flex-wrap gap-2">
            <div
              v-for="j in 2"
              :key="j"
              class="h-5 w-16 bg-gray-300 rounded-full animate-pulse"
            ></div>
          </div>
        </div>
      </template>

      <!-- Show actual posts when loaded -->
      <PostCard
        v-else
        v-for="post in store.posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from "@/store/posts";
import { onMounted } from "vue";

const store = usePostsStore();

useHead({ title: "Posts" });

onMounted(async () => {
  await store.fetchPosts();
});
</script>
