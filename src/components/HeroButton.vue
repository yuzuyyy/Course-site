<script setup>
const props = defineProps({
    class: {
        type: String,
        default:"",
    }
})
</script>

<template>
           <button
           :class="class"
            class="daisy-btn lg:daisy-btn-wide outline outline-2 outline-white/70  text-lg capitalize rounded-full max-md:text-base w-fit">
            <slot>
                defaul slot
            </slot>
          </button>
</template>