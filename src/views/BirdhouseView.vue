<template>
  <div>
    <BirdhouseHeader class="mb-6" 
      :name="bhName" 
      :coordinates="bhCoords" 
      @is-overview="changeOverview"
    />
    <BirdhouseOverviewItem 
      class="mb-4"
      v-for="(value,key) in bhObj" 
      v-if="isOverview"
      :key="key" 
      :date="new Date(key).toLocaleDateString('en-GB', {day: '2-digit',month: '2-digit',year: 'numeric',})" 
      :eggs="value.eggs" 
      :birds="value.birds" 
    />
    <BirdhouseChart v-else :eggs="{ name:'eggs', data:chartEggs }" :birds="{ name:'birds', data:chartBirds }" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import BirdhouseHeader from '@/components/BirdhouseHeader.vue';
import BirdhouseOverviewItem from '@/components/BirdhouseOverviewItem.vue';
import BirdhouseChart from '@/components/BirdhouseChart.vue';
import { useCommonStore } from "@/store/index";
import { useRoute } from 'vue-router';
import { occupancyAPI } from '@/types/types';

const props = defineProps({
  ubid: {
    type: String,
    required: true,
  },
});

const store = useCommonStore();
const route = useRoute();

const bhData: any = ref(new Array<occupancyAPI>());

const bhObj: any = ref({});

const isOverview = ref(true);

const storageData = computed(() => JSON.parse(localStorage.getItem('lastClickedBH') || '{}'));

const chartEggs = computed(() => {
  return Object.keys(bhObj.value).map(key => {
    return { x:key, y:bhObj.value[key].eggs }
  })
});

const chartBirds = computed(() => {
  return Object.keys(bhObj.value).map(key => {
    return { x:key, y:bhObj.value[key].birds }
  })
})

const bhName = computed(() => {
  if(store.clickedBh.name){
    return store.clickedBh.name;
  }
  else if(storageData.value.ubid === route.params.ubid){
    return storageData.value.name;
  }
  else{
    return "Missing name";
  }
});

const bhCoords = computed(() => {
  if(store.clickedBh.name){
    return store.clickedBh.name;
  }
  else if(storageData.value.ubid === route.params.ubid){
    return storageData.value.coordinates;
  }
  else{
    return "";
  }
});

function changeOverview(value:boolean){
  isOverview.value = value;
}

onMounted(async() => {
  await fetch(`https://be-02-birdhouse-dev-rec.shockbyte.dev/house/${props.ubid}/occupancy?` + new URLSearchParams({
    limit: "50",
  }))
    .then((response) => response.json())
    .then((data) => (bhData.value = data.items));
  
  bhData.value.sort((a:occupancyAPI,b:occupancyAPI) => new Date(a.created_at) > new Date(b.created_at)).map((occData:occupancyAPI) => {
    if(occData.created_at in bhObj.value){
      bhObj.value[occData.created_at].eggs += occData.eggs;
      bhObj.value[occData.created_at].birds += occData.birds;
    }
    else{
      bhObj.value[occData.created_at] = {};
      bhObj.value[occData.created_at].eggs = 0;
      bhObj.value[occData.created_at].birds = 0;
    }
  });

});
</script>
