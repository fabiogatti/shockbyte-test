<template>
    <div class="flex items-center">
        <img width="14" src="@/assets/marker.svg" alt="coordinates icon" />
        <p class="font-p pl-3">
          {{ coordinates ? coordinates : "Missing coordinates" }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    coordinates:{
        type: String,
        required: false,
        default: ''
    }
})
</script>