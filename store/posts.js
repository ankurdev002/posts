import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: useStorage("posts_cache", null),
    lastFetch: useStorage("posts_last_fetch", 0),
  }),
  actions: {
    async fetchPosts() {
      const now = Date.now();
      if (this.posts && now - this.lastFetch < 15 * 60 * 1000) return;

      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      this.posts = data.posts;
      this.lastFetch = now;
    },
  },
});
