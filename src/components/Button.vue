<script setup>
import {crown} from '../assets'

const props = defineProps({
    buttonClass: {
        type: String, 
    },
    icon: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button
        :class="buttonClass"
        class="daisy-btn w-fit  text-lg rounded-full bg-color6/40 backdrop-blur-3xl capitalize border-none shadow-sm shadow-white">
        <img 
        v-if="icon"
        class="w-4"
        :src="crown" alt="">
        <slot>Default Label</slot>
    </button>
</template>
