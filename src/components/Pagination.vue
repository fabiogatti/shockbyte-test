<template>
    <div class="flex space-x-4 items-center justify-center font-pagination">
        <router-link 
            :class="{ 'pointer-events-none , opacity-40' : pageInfo.currentPage == 1 }" 
            :to="{ name: 'grid', params: { page: pageInfo.currentPage-1 } }"
        >
            <img src="@/assets/leftArrow.svg" alt="left arrow" class="pr-2.5">
        </router-link>

        <router-link 
            :class="{ 'pointer-events-none , pagination-active' : pageInfo.currentPage == 1 }" 
            :to="{ name: 'grid', params: { page: 1 } }"
        >
            <p>1</p>
        </router-link>

        <p v-if="pageInfo.currentPage-2 > 1">...</p>

        <router-link 
            v-if="pageInfo.currentPage > 2" 
            :to="{ name: 'grid', params: { page: pageInfo.currentPage-1 } }"
        >
            {{ pageInfo.currentPage - 1 }}
        </router-link>

        <p 
            v-if="pageInfo.currentPage > 1 && pageInfo.currentPage < pageInfo.totalPages" 
            class="pagination-active"
            >{{ pageInfo.currentPage }}
        </p>

        <router-link 
            v-if="pageInfo.currentPage < pageInfo.totalPages - 1" 
            :to="{ name: 'grid', params: { page: pageInfo.currentPage+1 } }"
        >
            {{ pageInfo.currentPage + 1 }}
        </router-link>

        <p v-if="pageInfo.currentPage + 2 < pageInfo.totalPages">...</p>

        <router-link 
            :class="{ 'pointer-events-none , pagination-active' : pageInfo.currentPage == pageInfo.totalPages }" 
            v-if="pageInfo.totalPages>1" :to="{ name: 'grid', params: { page: pageInfo.totalPages } }"
        >
            <p>{{ pageInfo.totalPages }}</p>
        </router-link>

        <router-link 
            :class="{ 'pointer-events-none , opacity-40' : pageInfo.currentPage == pageInfo.totalPages }" 
            :to="{ name: 'grid', params: { page: pageInfo.currentPage+1 } }"
        >
            <img src="@/assets/rightArrow.svg" alt="right arrow" class="pl-2.5">
        </router-link>
    </div>
</template>

<script setup lang="ts">
    import { useCommonStore } from "@/store/index";
    import { computed } from "vue";
    import { PageInfo } from "@/types/types";

    const store = useCommonStore();

    const pageInfo = computed({
        get():PageInfo {
            return store.pageInfo;
        },
        set() {}
    });


    // To test the pagination
    /*const pageInfo = {
        currentPage: 4,
        itemCount: 1,
        itemsPerPag: 18,
        totalItems: 1,
        totalPages: 7
    }*/
</script>
