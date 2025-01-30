<script setup>
import { rocket } from '../assets';

const props = defineProps({
    icon: {
        type: String,
        default : rocket
    },
    title: {
        type: String,
        default: "title"
    }
})
</script>

<template>
    <div class="flex items-center gap-2 border  rounded-full  w-fit">
        <img 
        class="size-12 bg-color3/20 rounded-full"
        :src="icon" alt="rocket">
        <p class="p2 capitalize pr-4">{{ title }}</p>
    </div>
</template>