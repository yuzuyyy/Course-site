<script setup>
import { logo , vue} from '../assets';

</script>

<template>
    <section class="section-padding max-md:pb-[10px]"> 
        <div class="mx-auto max-w-screen-xl flex-col flex items-center  gap-20 max-md:gap-12 py-12">
            <div class="flex flex-col items-center gap-6">
                <img 
                class="w-[173px] h-[48px] object-contain"
                :src="logo" alt="">

                <h2 class="heading2 text-[42px] font-semibold text-center max-w-[840px] max-md:text-[32px] max-md:font-normal">
                    Boost your Learning & Knowledge with CourseSite Now
                </h2>

                <button class="daisy-btn daisy-btn-wide bg-slate-900 text-lg font-inter text-white rounded-full daisy-btn-large">Start learning now</button>

                <p class="p1 text-center max-md:font-thin max-md:max-w-md">Boost your Learning & Knowledge with CourseSite Now</p>
            </div>

            <div class="flex items-center gap-20 max-md:flex-col max-md:gap-6 max-md:hidden">

                <div class="flex gap-20 items-center max-md:gap-6 ">
                    <a 
                    class="p2 hover:text-color1 capitalize font-semibold max-md:font-thin max-md:text-lg"
                    v-for="link in ['benefits', 'courses','contact', 'reviews', ]"
                    href="">
                        {{ link }}
                    </a>
                </div>

                <div class="flex gap-20 max-md:gap-6">
                    <button class="p2">Join us</button>
                    <button class="text-lg font-inter border rounded-full  px-4">Notify me</button>
                </div>
            </div>

            <div class="daisy-divider"></div>

            <div class="flex flex-col gap-4 items-center">
                
                <p class="flex items-center gap-1">Made with VueJs
                    <img 
                    class="size-8"
                    :src="vue" alt="">
                    by<span class="font-inter text-lg font-semibold">Hendz</span>
                </p>
                <p class="p2 text-center">
      CourseSite © {{ new Date().getFullYear() }}. Designed by FrameBase
    </p>
            </div>
        </div>
    </section>
</template>