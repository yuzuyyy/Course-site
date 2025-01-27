<script setup>
import arrow from '../assets/arrow.svg'; // Pastikan path ke ikon benar

const props = defineProps({
    class: {
        type: String,
        default: "daisy-btn daisy-btn-wider bg-white rounded-full text-lg font-inter flex items-center justify-center gap-2 border border-black hover:bg-black hover:text-white group"
    }
});
</script>

<template>
    <button :class="class">
        <slot>
            View all course
            <img 
                class="w-6 h-6 group-hover:bg-white rounded-full" 
                :src="arrow" 
                alt="arrow icon" />
        </slot>
    </button>
</template>
