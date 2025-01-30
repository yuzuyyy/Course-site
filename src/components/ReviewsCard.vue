<script setup>
import { Stars } from '.';
import { linkedin } from '../assets';

const props = defineProps({
    image: {
        type: String,
    },
    name: {
        type: String,
        default: "Hendriawan"
    },
    comment: {
        type: String
    },
    role: {
        type: String,
        default: "Reviewer role"
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
    <div 
    :class="{'xl:rotate-right' :rotateRight, 'xl:rotate-left' : rotateLeft}"
    class="daisy-card w-full max-w-lg min-w-[400px] shadow-sm shadow-black rounded-3xl">
        <div class="daisy-card-body justify-between gap-6">
            <div class="flex flex-col gap-6">
                <div class="flex flex-1 justify-between">
                    <Stars />
                    <img 
                    class="size-8"
                    :src="linkedin" alt="">
                </div>
                <p class="p2 italic text-start ">{{comment}}</p>
            </div>

            <div class="flex items-center gap-4">
                <div class="daisy-avatar">
                    <div class="w-16 rounded-full">
                        <img :src="image" />
                    </div>
                </div>

                <div>
                    <p class="p1 font-medium">{{ name }}</p>
                    <p class="p2 text-base opacity-80">{{ role }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
