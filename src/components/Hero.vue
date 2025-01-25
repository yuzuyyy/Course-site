<script setup>
import { hero } from '../assets';


</script>

<template>
  <section class="relative bg-white flex flex-col items-center pt-[140px] px-[60px] radial overflow-hidden">
    <div class="absolute inset-0 bg-white/20 backdrop-blur-3xl ">
    </div>
  

    <div class="w-full flex flex-col items-center gap-[60px] z-20">
      <!-- text-content start-->
      <div class="flex flex-col items-center gap-8">
        <div
          class="daisy-btn rounded-full flex items-center gap-1 bg-white/40 shadow shadow-white border-none backdrop-blur-3xl">
          <div class="size-2 bg-black rounded-full"></div> Trusted by 20,000+ Happy Learners
        </div>

        <div class="flex flex-col items-center gap-8">
          <h1 class="heading1 max-w-6xl"> Web Dev & Design made Simple, Better.</h1>
          <p class="p2 text-center max-w-3xl">
            Practical project-based courses that are easy to understand, straight to the point, and distractions while ensuring comprehensive learning.
          </p>
        </div>

        <div class="flex gap-8">
          <button
            class="daisy-btn daisy-btn-wide text-xl rounded-full bg-color6/40 backdrop-blur-3xl capitalize border-none shadow-sm shadow-white">
            View all courses
          </button>
          <button
            class="daisy-btn daisy-btn-wide outline outline-8 outline-white/70 bg-white text-xl capitalize rounded-full">
            Start learning now
          </button>
        </div>
      </div>
      <!-- text-content end-->

      <!-- visual content start -->
      <div class="relative w-full flex items-center justify-center h-[356px]">
        <img class="absolute max-w-screen-lg h-[428px] min-hh-[500px]" :src="hero" alt="hero" />
      </div>
      <!-- visual content end -->
    </div>
  </section>
</template>
