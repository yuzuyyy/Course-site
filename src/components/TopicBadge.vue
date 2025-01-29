<script setup>
import { visual } from '../assets';
const props = defineProps({
    label: {
        type: String,
        default: "Label"
    }
})

</script>

<template>
    <div class="daisy-badge p-8 flex gap-2 border-2 border-white outline-1 outline-black rounded-xl bg-color1/10">
        <img 
        class="w-5"
        :src="visual" alt="">
        <p class="text-lg font-inter font-semibold">{{ label }}</p>
    </div>
</template>