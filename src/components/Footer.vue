<script setup>
import { logo } from '../assets';

</script>

<template>
    <section class="pt-[160px] px-[60px] pb-[40px] "> 
        <div class="mx-auto max-w-screen-xl flex-col flex items-center  gap-20 py-12">
            <div class="flex flex-col items-center gap-6">
                <img 
                class="w-[173px] h-[48px] object-contain"
                :src="logo" alt="">

                <h2 class="heading2 text-[42px] font-semibold text-center max-w-[840px] ">
                    Boost your Learning & Knowledge with CourseSite Now
                </h2>

                <button class="daisy-btn daisy-btn-wide bg-slate-900 text-lg font-inter text-white rounded-full daisy-btn-large">Start learning now</button>

                <p class="p1 text-center">Boost your Learning & Knowledge with CourseSite Now</p>
            </div>

            <div class="flex items-center gap-20">

                <div class="flex gap-20 items-center">
                    <a 
                    class="p2 hover:text-color1 capitalize font-semibold"
                    v-for="link in ['benefits', 'courses','contact', 'reviews', ]"
                    href="">
                        {{ link }}
                    </a>
                </div>

                <div class="flex gap-20">
                    <button class="p2">Join us</button>
                    <button class="p2 border rounded-full py-1 px-4">Notify me</button>
                </div>
            </div>

            <div class="daisy-divider"></div>

            <div>
                <p class="p2 text-center">CourseSite © 2024. Designed by FrameBase</p>
            </div>
        </div>
    </section>
</template>