<script setup>
import { star } from '../assets';
const stars = [1, 2, 3, 4, 5];
</script>

<template>
    <div class="flex gap-2 max-md:gap-1">
                    <img 
                        v-for="(starItem, index) in stars"
                        :key="index"
                        :src="star"
                        alt="Star Icon"
                        class="size-6 max:md:size-4"
                    />
                </div>
</template>