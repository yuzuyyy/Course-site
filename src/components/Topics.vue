<script setup>
import { visual, badge7 } from '../assets';
import {Badge,TopicBadge} from './'
import { topics } from '../constans';
</script>

<template>
    <section class="pt-[96px] px-[60px]  z-20">
        <div class="mx-auto max-w-screen-xl flex flex-col items-center justify-center gap-[44px]  ">
            <!-- heading start -->
            <div class="flex  items-center justify-center gap-[30px] ">
                <img class="size-[25px]" :src="visual" alt="">

                <div class="flex flex-col items-center max-w-[620px] gap-[16px] ">
                    <Badge 
                    :icon="badge7"
                    title="Featured Topics" />
                    <h2 class="heading2 text-center md:text-[42px] font-medium">Courses Topics</h2>
                    <p class="p1 text-center">Explore the key topics covered in our courses, designed to equip you with the skills needed for real-world success.</p>
                </div>

                <img class="size-[25px]" :src="visual" alt="">
            </div>
            <!-- heading end -->

            <!-- featured card start -->
            <div class="flex flex-wrap gap-4 max-w-screen-lg items-center justify-center">
               <TopicBadge 
               v-for="topic in topics"
               :key="topic"
               :label="topic"
               />
            </div>
            <!-- featured card end -->

            <ButtonCta/>
           
        </div>
    </section>
</template>