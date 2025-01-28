<script setup>
import { socmeds } from '../constans';
</script>

<template>
    <div class="flex gap-4">
        <img 
        v-for="(icon, index) in socmeds"
        :key="index"
        class="size-8"
        :src="icon" 
        alt="Social Media Icon">
    </div>
</template>
