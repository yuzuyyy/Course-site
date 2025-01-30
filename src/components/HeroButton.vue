<script setup>
const props = defineProps({
    class: {
        type: String
    }
})
</script>

<template>
           <button
           :class="class"
            class="daisy-btn lg:daisy-btn-wide outline outline-8 outline-white/70 bg-white text-xl capitalize rounded-full max-md:text-base ">
            <slot>
                defaul slot
            </slot>
          </button>
</template>