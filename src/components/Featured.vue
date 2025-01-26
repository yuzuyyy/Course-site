<script setup>
import { visual,badge2 } from '../assets';
import { Badge, CourseCard, FeaturedCard } from '../components';
import { features } from '../constans';



</script>

<template>
    <section class=" items-center justify-center gap-[88px] pt-[96px] px-[60px] bg-white z-20">
        <div class="mx-auto max-w-screen-xl flex flex-col items-center justify-center gap-[44px]  ">
            <!-- heading start -->
            <div class="flex  items-center justify-center gap-[30px] ">
                <img class="size-[25px]" :src="visual" alt="">

                <div class="flex flex-col items-center max-w-[620px] gap-[16px] ">
                    <Badge 
                    :icon="badge2"
                    title="Featured Topics" />
                    <h2 class="heading2 text-center md:text-[42px] font-medium">Courses Topics</h2>
                    <p class="p1 text-center">From critical skills to technical topics, we support your professional development with courses that help you grow and succeed.</p>
                </div>

                <img class="size-[25px]" :src="visual" alt="">
            </div>
            <!-- heading end -->

            <!-- featured card start -->
            <div class="grid-offer">
                <FeaturedCard 
                v-for="feature in features" :key="feature.title"
                v-bind="feature"
                />
                <!-- <CourseCard v-for="card in cards" :key="card.text" v-bind="card" /> -->
            </div>
            <!-- featured card end -->

           
        </div>
    </section>
</template>