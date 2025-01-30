<script setup>

import { PriceCard, Stars } from '../components'
import { plans } from '../constans';

</script>

<template>
    <section class="section-padding">
        <div class="mx-auto max-w-screen-xl flex flex-col items-center justify-center gap-[60px]">
            <!-- heading start -->
            <div class="w-full flex justify-between items-end max-md:flex-col max-md:items-center max-md:gap-8">
                <h2 class="heading2 md:text-[42px] font-medium max-md:text-3xl">Join Our Premium Courses</h2>

                <div class="flex flex-col gap-6 max-md:items-center max-md:gap-2">
                    <h4 class="heading4 text-xl">Trusted by 70k+ students</h4>
                    <div class="flex items-center gap-4">
                        <Stars />
                        <p>4.8/5</p>

                        <div class="flex items-center gap-4">
                            <div class="size-2 bg-black rounded-xl"></div>
                            <p>5,467 Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- heaading end -->

            <div class="grid-offer">
                <PriceCard 
                v-for="plan in plans" 
                :key="plan.name" 
                :plan="plan" 
                :isPopular="plan.isPopular || false" />
            </div>
        </div>
    </section>
</template>