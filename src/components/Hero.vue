<script setup>
import { hero } from '../assets';

</script>

<template>
    <section class="relative bg-white flex flex-col items-center pt-[80px] px-[60px]">
        <div class="w-full flex flex-col items-center gap-[60px]">
            <!-- text-content start-->
            <div class="flex flex-col items-center gap-6">
                <button class="daisy-btn rounded-full flex items-center gap-1"> <div class="size-2 bg-black rounded-full"></div> Trusted by 20,000+ Happy Learners</button>

                <div class="flex flex-col items-center  gap-8">
                    <h1 class="heading1 max-w-6xl"> Web Dev & Design made Simple, Better.</h1>
                    <p class="p2 text-center max-w-3xl">Practical project-based courses that are easy to understand, straight to the point, and distractions while ensuring comprehensive learning.</p>
                </div>

                <div class="flex gap-6">
                    <button class="daisy-btn text-xl rounded-full">View all courses</button>
                    <button class="daisy-btn text-xl rounded-full">Start learning now</button>
                </div>
            </div>
            <!-- text-content end-->

            <!-- visual content start -->
            <div class="relative w-full flex items-center justify-center h-[356px] bg-black">
                <img 
                class="absolute max-w-screen-lg h-[428px] min-hh-[500px]"
                :src="hero" alt="hero">
            </div>
            <!-- visual content end -->
        </div>
    </section>
</template>