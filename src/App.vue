<template>
  <nav class="nav text-center py-5 text-2xl font-bold">
    <h2>Shockbyte BirdHouses Admin Panel</h2>
  </nav>
  <div class="flex flex-col">
    <div class="flex">
      <aside
        class="sidebar w-20 flex flex-col space-y-3"
        v-if="$route.name != 'home'"
      >
        <IconBtn v-for="link in links" :key="link" :link="link" />
      </aside>
      <router-view :key="$route.fullPath" class="router flex-1 p-8" :style="$route.name == 'home' ? 'min-height:calc(100vh - 72px)' : 'min-height:calc(100vh - 136px)'" />
    </div>
    <footer class="py-4 bg-gray-light" v-if="$route.name != 'home'">
      <Pagination />
    </footer>
  </div>
</template>

<script setup lang="ts">
import IconBtn from "@/components/IconBtn.vue";
import Pagination from "@/components/Pagination.vue";

let links = ["home", "grid"];
</script>

<style>
#app {
  @apply bg-gray-dark;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
}

.nav {
  @apply bg-gray-light;
  font-family: "Inter";
}

.sidebar {
  @apply bg-gray-light;
}
</style>
