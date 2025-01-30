<script setup>
import { badge3 } from '../assets';
import { Badge, Button, HeroButton } from '../components';
import { vectors, reviews } from '../constans'
import ReviewsCard from './ReviewsCard.vue';


</script>

<template>
    <section class="section-padding">
        <div class="mx-auto max-w-screen-xl flex flex-col items-start justify-center gap-[60px]  ">
            <!-- heading start -->
            <div class="w-full flex items-center justify-between ">
                <!-- text content start -->
                <div class="flex flex-col  gap-[16px] max-md:items-center">
                    <Badge :icon="badge3" title="Testimonials" />
                    <h2 class="heading2 md:text-[42px] font-medium ">Our Students feedback</h2>
                    <p class="p2 max-w-lg ">Explore the incredible advantages of enrolling in our courses and enhancing
                        your skills.</p>
                    <HeroButton class="bg-slate-900 text-white">Start learning now</HeroButton>
                </div>
                <!-- text-content end -->

                <!-- vectors -->
                <div class="flex gap-6 max-md:hidden">
                    <img class="size-8" v-for="vector in vectors " :src="vector" alt="">
                </div>
            </div>
            <!-- heading end -->

            <div class="grid-offer">
                <ReviewsCard v-for="review in reviews" :key="review.name" v-bind="review" />
            </div>
        </div>
    </section>
</template>