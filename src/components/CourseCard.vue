<script setup>
import { card1 } from '../assets';

const props = defineProps({
    image: {
        type: String,
        default: card1
    },
    text: {
        type: String,
        default: "Text"
    },
    number: {
        type: String,
        default: "15+"
    },
    rotateLeft: {
        type: Boolean,
        default: false
    },
    rotateRight: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div class="relative flex-1 flex flex-col items-center justify-center gap-4 overflow-visible w-full max-w-lg min-w-[400px]">
        <!-- content start -->
        <div 
            :class="{ 'xl:rotate-right': rotateRight, 'xl:rotate-left': rotateLeft }"
            class="w-full flex flex-col justify-center gap-8 py-16 px-16 rounded-3xl shadow-sm shadow-black"
        >
            <!-- wrapper start -->
            <div class="flex flex-col items-center justify-center gap-6">
                <div class="p-2 rounded-3xl shadow-sm shadow-black ">
                    <img 
                        class="w-[105px] h-[105px] object-cover overflow-hidden"
                        :src="image" 
                        alt="Card Image"
                    >
                </div>
                <div class="flex flex-col items-center gap-2">
                    <span class="text-center text-7xl font-bold font-inter">{{ number }}</span>
                    <p class="p-2 uppercase">{{ text }}</p>
                </div>
            </div>
            <!-- wrapper end -->
        </div>
        <!-- content end -->
    </div>
</template>
