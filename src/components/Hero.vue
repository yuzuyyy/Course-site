<script setup>
import { hero } from '../assets';
import { HeroButton } from '.';

</script>

<template>
  <section class="relative bg-white section-padding pt-[140px]  overflow-hidden radial">
    <div class="absolute inset-0 bg-white/20 backdrop-blur-3xl ">
    </div>
    <div class="w-full flex flex-col items-center gap-[60px] z-20">
      <!-- text-content start-->
      <div class="flex flex-col items-center gap-8">
        <div
          class="py-2 px-6 font-inter rounded-full flex items-center gap-2 bg-white/40 shadow shadow-white border-none backdrop-blur-3xl">
          <div class="size-2 bg-black rounded-full"></div> Trusted by 20,000+ Happy Learners
        </div>

        <div class="flex flex-col items-center gap-8 z-20">
          <h1 class="heading1 max-w-[840px] max-md:"> Web Dev & Design made Simple, Better.</h1>
          <p class="p2 text-center max-w-3xl max-md:max-w-xl max-md:leading-normal">
            Practical project-based courses that are easy to understand, straight to the point, and distractions while ensuring comprehensive learning.
          </p>
        </div>

        <div class="flex gap-8  max-md:gap-4 z-20">
         <HeroButton>View all courses</HeroButton>
         <HeroButton>Start learning now</HeroButton>
        </div>
      </div>
      <!-- text-content end-->

      <!-- visual content start -->
      <div class="relative w-full flex items-center justify-center h-[356px] max-md:h-[200px]">
        <img class="absolute max-w-screen-lg max-md:max-w-screen-sm overflow-hidden" :src="hero" alt="hero" />
      </div>
      <!-- visual content end -->
    </div>
  </section>
</template>
