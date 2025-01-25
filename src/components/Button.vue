<script setup>
const props = defineProps({
    buttonClass: {
        type: String, 
    }
})
</script>

<template>
    <button
        :class="buttonClass"
        class="daisy-btn daisy-btn-wide text-xl rounded-full bg-color6/40 backdrop-blur-3xl capitalize border-none shadow-sm shadow-white">
        <slot>Default Label</slot>
    </button>
</template>
