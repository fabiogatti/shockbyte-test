<template>
    <div class="flex flex-col rounded-xl bg-gray-light px-6">
        <div class="flex flex-row justify-between pt-6">
            <p class="font-header">{{ name }}</p>
            <Coordinates :coordinates="coordinates" />
        </div>
        <div class="flex pt-5 font-p-small cursor-default">
            <p @click="changeView(true)" :class="[ isOverview ? 'header-item-active pointer-events-none': 'opacity-40 cursor-pointer' ]">Overview</p>
            <p @click="changeView(false)" :class="[ !isOverview ? 'header-item-active pointer-events-none': 'opacity-40 cursor-pointer' ]" class="ml-8">Graph</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Coordinates from "@/components/Coordinates.vue";
import { ref } from "vue";

const emit = defineEmits(['is-overview']);

const props = defineProps({
    name:{
        type: String,
        required: true,
    },
    coordinates:{
        type: String,
        required: false,
        default: '',
    },
});

const isOverview = ref(true);

function changeView(value:boolean){
    if(isOverview.value == value) return;
    isOverview.value = value;
    emit('is-overview',value);
}

</script>