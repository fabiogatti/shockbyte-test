import { defineStore } from "pinia";
import { ref } from "vue";
import { PageInfo, Birdhouse } from "@/types/types";


export const useCommonStore = defineStore("common", () => {
  const pageInfo = ref(new PageInfo)
  const clickedBh = ref(new Birdhouse)
  
  function setPageInfo(info:PageInfo) {
    pageInfo.value = info;
  }

  function setBirdhouse(value:Birdhouse) {
    clickedBh.value = value;
  }

  return { pageInfo, setPageInfo, clickedBh, setBirdhouse }
});
