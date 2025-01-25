<script setup>
import { visual } from '../assets';
import Badge from './Badge.vue';
import CourseCard from './CourseCard.vue'


</script>

<template>
    <section class="flex flex-col items-center justify-center gap-[88px] pt-[96px] px-[60px] bg-white z-20">
        <div class="mx-auto max-w-screen-xl flex flex-col items-center justify-center gap-[44px] ">
            <!-- heading start -->
            <div class="flex  items-center justify-center gap-[30px]">
                
                <img 
                class="size-[25px]"
                :src="visual" alt="">

                <div class="flex flex-col items-center max-w-[620px] gap-[16px] ">
                    <Badge 
                    title="we offer"
                    />
                    <h2 class="heading2 text-center md:text-[42px] font-medium">Boost Your Skills</h2>
                    <p class="p1 text-center">From critical skills to technical topics, we support your professional development with courses that help you grow and succeed.</p>
                </div>

                <img 
                class="size-[25px]"
                :src="visual" alt="">
            </div>

            <CourseCard />
            <!-- heading end -->
        </div>
    </section>
</template>