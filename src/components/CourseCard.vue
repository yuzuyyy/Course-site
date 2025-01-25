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
    }
});
</script>

<template>
    <div class="w-[262px] flex flex-col items-center justify-center gap-[16px]">
        <!-- content start -->
        <div 
            style="transform-style: preserve-3d; box-shadow: 0 10px 30px black; perspective: 1200px;"
            class="w-full flex flex-col justify-center gap-[30px] py-[60px] px-[40px] border rounded-3xl"
        >
            <!-- wrapper start -->
            <div class="flex flex-col items-center justify-center gap-[24px]">
                <div 
                    style="box-shadow: 0 0 30px;"
                    class="p-[8px] rounded-3xl"
                >
                    <img 
                        class="size-[105px] overflow-hidden"
                        :src="image" 
                        alt=""
                    >
                </div>
                <div class="flex flex-col items-center gap-2 border">
                    <span class="text-center text-7xl font-bold font-inter">{{ number }}</span>
                    <p class="p2 uppercase">{{ text }}</p>
                </div>
            </div>
            <!-- wrapper end -->
        </div>
        <!-- content end -->
    </div>
</template>
