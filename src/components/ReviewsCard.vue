<script setup>
import { Stars } from '.';
import {linkedin} from '../assets'

const props = defineProps({
    image: {
        type: String,
    },
    name: {
        type: String,
        defult: "Hendriawan"
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
})

</script>

<template>
    <div 
    :class="{'rotate-right' : rotateRight, 'rotate-left' : rotateLeft}"
    class="daisy-card max-w-lg shadow-sm shadow-black rounded-3xl">
        <div class="daisy-card-body justify-between gap-6">
            <div class="flex flex-col gap-6">
                <div class="flex flex-1 justify-between">
                    <Stars />
                    <img 
                    class="size-8"
                    :src="linkedin" alt="">
                </div>
                <p class="p2 italic ">{{comment}}</p>
            </div>

            <div class="flex  items-center gap-4">
                <div class="daisy-avatar">
                    <div class="w-16 rounded-full">
                        <img :src="image" />
                    </div>
                </div>

                <div >
                    <p class="p1 font-medium">{{ name }}</p>
                    <p class="p2 text-base opacity-80">{{ role }}</p>
                </div>
            </div>
        </div>
    </div>
</template>