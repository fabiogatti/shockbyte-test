<template>
    <router-link :to="link == 'home' ? '/' : link">
        <button class="icon-btn" :class="{ 'active' : $route.name == link}">
            <img :class="{ 'opacity-20' : $route.name != link }" :src="require(`@/assets/${link}.svg`)" :alt="`${link} icon`">
        </button>
    </router-link>
</template>
  
<script setup lang="ts">
    defineProps({
        link: { 
            type: String, 
            required: true 
        },
    })
</script>
