<template>
  <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
    <BirdhouseItem 
      v-for="bHouse in birdhouseData.items" 
      :key="bHouse.value" 
      :name="bHouse.birdhouse.name" 
      :ubid="bHouse.value"
      :coordinates="`(${bHouse.birdhouse.latitude}, ${bHouse.birdhouse.longitude})`" 
      :lastUpdated="bHouse.birdhouse.lastOccupationUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import BirdhouseItem from "@/components/BirdhouseItem.vue";

const birdhouseData:any = ref({});

onMounted(()=>{
  fetch("https://be-02-birdhouse-dev-rec.shockbyte.dev/registration")
    .then(response => response.json())
    .then(data => birdhouseData.value = data);
});

</script>
