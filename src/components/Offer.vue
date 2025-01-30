<script setup>
import { visual } from '../assets';
import { Badge, CourseCard, LogoSlider } from '../components';
import { cards } from '../constans';



</script>

<template>
    <section class=" section-padding bg-white z-20">
        <div class="mx-auto max-w-screen-xl flex flex-col  justify-center gap-[44px]  ">
            <!-- heading start -->
            <div class="flex  items-center justify-center gap-[30px] ">
                <img class="size-[25px] max-md:hidden" :src="visual" alt="">

                <div class="flex flex-col items-center max-w-[620px] gap-[16px] max-md:max-w-2xl">
                    <Badge title="we offer" />
                    <h2 class="heading2 text-center md:text-[42px] font-medium">Boost Your Skills</h2>
                    <p class="p1 text-center  ">From critical skills to technical topics, we support your professional
                        development with courses that help you grow and succeed.</p>
                </div>

                <img class="size-[25px] max-md:hidden" :src="visual" alt="">
            </div>
            <!-- heading end -->

            <!-- site info start -->
            <div class="grid-offer ">
                <CourseCard v-for="card in cards" :key="card.text" v-bind="card" />
            </div>
            <!-- site info end -->

            <!-- social proof start -->
            <div class="flex flex-col items-center justify-center gap-[16px] w-full ">

                <div class="flex items-center justify-center w-full">
                    <div class="h-[0.5px] w-1/4  bg-gray-400">
                    </div>
                    <p class="p1 text-center w-2/4 max-md:text-sm">Adopted by renowned enterprises such as</p>
                    <div class="h-[0.5px] flex-1 bg-gray-400"></div>
                </div>

                <!-- <LogoSlider /> -->
            </div>
            <!-- social proof end -->
        </div>
    </section>
</template>