<template>
  <router-link
    :to="{ name: 'birdhouse', params: { ubid: ubid } }"
    class="h-fit"
  >
    <div class="bg-gray-light rounded-xl p-6 flex flex-col">
      <p class="font-header text-left">{{ name }}</p>
      <div class="pt-4">
        <Coordinates :coordinates="coordinates"  />
      </div>
      <div class="flex pt-3">
        <img width="15" src="@/assets/date.svg" alt="date icon" />
        <p class="font-p pl-3">
          {{ lastUpdated ? dateLastUpdate : "Missing last date updated" }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import Coordinates from "@/components/Coordinates.vue";

    const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    ubid: {
        type: String,
        requred: true,
    },
    coordinates: {
        type: String,
        required: false,
        default: "",
    },
    lastUpdated: {
        type: String,
        required: false,
        default: "",
    },
    });

    const dateLastUpdate = computed(() =>
    new Date(props.lastUpdated).toLocaleString()
    );
</script>
