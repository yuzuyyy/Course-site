<script setup>


const props = defineProps({
    icon: {
        type: String,
    },
    title: {
        type: String,
    },
    desc: {
        type: String
    }
})

</script>

<template>
    <div class="daisy-card shadow-sm shadow-black rounded-3xl">
        <div class="daisy-card-body gap-8">
            <div class=" grid place-items-center w-fit bg-black/10 p-2 rounded-xl">
                <img 
                class="size-10"
                :src="icon" alt="">
            </div>
            <h3 class="heading3 ">{{ title }}</h3>
            <p class="font-inter text-[14px]">{{ desc }}</p>
        </div>
    </div>
</template>