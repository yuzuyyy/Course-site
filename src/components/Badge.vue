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
    <div class="flex items-center gap-2 border rounded-full pr-2">
        <img 
        class="size-[30px] p-2  bg-color3/20 rounded-full"
        :src="icon" alt="rocket">
        <p class="p-2 capitalize ">{{ title }}</p>
    </div>
</template>