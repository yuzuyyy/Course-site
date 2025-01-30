<script setup>
import { visual,badge2 } from '../assets';
import { Badge, ButtonCta, CourseCard, FeaturedCard } from '../components';
import { features } from '../constans';



</script>

<template>
    <section class="section-padding  z-20">
        <div class="mx-auto max-w-screen-xl flex flex-col items-center justify-center gap-[44px]  ">
            <!-- heading start -->
            <div class="flex  items-center justify-center gap-[30px] ">
                <img class="size-[25px] max-md:hidden" :src="visual" alt="">

                <div class="flex flex-col items-center max-w-[620px] gap-[16px] ">
                    <Badge 
                    :icon="badge2"
                    title="Featured Topics" />
                    <h2 class="heading2 text-center md:text-[42px] font-medium">Featured Courses</h2>
                    <p class="p1 text-center">From critical skills to technical topics, we support your professional development with courses that help you grow and succeed.</p>
                </div>

                <img class="size-[25px] max-md:hidden" :src="visual" alt="">
            </div>
            <!-- heading end -->

            <!-- featured card start -->
            <div class="grid-offer">
                <FeaturedCard 
                v-for="feature in features" :key="feature.title"
                v-bind="feature" />
            </div>
            <!-- featured card end -->

            <ButtonCta/>
           
        </div>
    </section>
</template>