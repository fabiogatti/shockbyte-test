<template>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
    <BirdhouseItem
      v-for="bHouse in birdhouseData.items"
      @click="itemClicked(bHouse.birdhouse)"
      :key="bHouse.value"
      :name="bHouse.birdhouse.name"
      :ubid="bHouse.value"
      :coordinates="`(${bHouse.birdhouse.latitude}, ${bHouse.birdhouse.longitude})`"
      :lastUpdated="bHouse.birdhouse.lastOccupationUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import BirdhouseItem from "@/components/BirdhouseItem.vue";
import { useCommonStore } from "@/store/index";
import { BirdHouseAPI } from "@/types/types";

const props = defineProps({
  page:{
    type: Number,
    required: false,
    default: 1,
  }
})

const birdhouseData: any = ref({});

const store = useCommonStore();

onMounted(async() => {
  await fetch("https://be-02-birdhouse-dev-rec.shockbyte.dev/registration?" + new URLSearchParams({
    limit: "18", //Can be changed to 1 to test pagination
    page: props.page.toString()
  }))
    .then((response) => response.json())
    .then((data) => (birdhouseData.value = data));
  store.setPageInfo(birdhouseData.value.meta);
});

function itemClicked(birdhouse:BirdHouseAPI){
  let data = { name:birdhouse.name, coordinates:`(${birdhouse.latitude}, ${birdhouse.longitude})` };
  store.setBirdhouse(data);
  localStorage.setItem('lastClickedBH', JSON.stringify({ ubid:birdhouse.ubidValue, ...data }));
}
</script>
