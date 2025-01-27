<script setup>
import { star } from '../assets';
const stars = [1, 2, 3, 4, 5];
</script>

<template>
    <div class="flex gap-2">
                    <img 
                        v-for="(starItem, index) in stars"
                        :key="index"
                        :src="star"
                        alt="Star Icon"
                        class="h-6 w-6"
                    />
                </div>
</template>