<template>
    <div class="flex px-5 py-6 font-p-small rounded-xl bg-gray-light">
        <p class="pr-10">{{ date }}</p>
        <div class="flex">
            <img class="pr-3" src="@/assets/paw.svg" alt="paw icon">
            <p class="pr-[14px]">{{ birds }}</p>
            <img class="pr-3" src="@/assets/egg.svg" alt="egg icon">
            <p>{{ eggs }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    date:{
        type: String,
        required: true,
    },
    birds:{
        type: Number,
        required: false,
        default: 0,
    },
    eggs: {
        type: Number,
        required: false,
        default: 0,
    }
})
</script>