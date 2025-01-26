<script setup>
import { feature1, star, bars } from '../assets';

const stars = [1, 2, 3, 4, 5];
</script>

<template>
    <div class="daisy-card bg-base-100 w-[360px] shadow-xl shadow-black">
        <figure class="px-10 pt-10">
            <img :src="feature1" alt="Feature Image" class="rounded-xl h-[203px]" />
        </figure>
        <div class="daisy-card-body daisy-items-start gap-6">
            <!-- Bagian rating dengan bintang -->
            <div class="flex gap-1">
                <img 
                    v-for="(starItem, index) in stars"
                    :key="index"
                    :src="star"
                    alt="Star Icon"
                    class="h-5 w-5"
                />
            </div>
            <!-- Judul dan deskripsi -->
            <h2 class="card-title heading4 line-clamp-1">
                JavaScript Full Mastery 2024 Edition Updated
            </h2>
            <p class="p1 font-thin text-lg line-clamp-2">
                Master JavaScript with our updated course. Learn core concepts, ES6+,
                and advanced techniques to create dynamic, responsive web applications.
            </p>
            <!-- Bagian fitur dan level -->
            <div class="daisy-card-actions items-center justify-between">
                <button class="daisy-btn bg-color2/20 text-color2">Feature</button>
                <div class="flex items-center">
                    <img 
                        class="h-5 w-5 mr-2"
                        :src="bars" 
                        alt="Level Icon"
                    />
                    <p>Intermediate</p>
                </div>
            </div>
        </div>
    </div>
</template>
