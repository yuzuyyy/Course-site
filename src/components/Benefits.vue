<script setup>
import { visual, badge4 } from '../assets';
import { Badge,BenefitCard } from '../components';
import { benefits } from '../constans';




</script>

<template>
    <section class=" items-center justify-center gap-[88px] pt-[96px] px-[60px] bg-white z-20">
        <div class="mx-auto max-w-screen-xl flex flex-col items-center justify-center gap-[44px]  ">
            <!-- heading start -->
            <div class="flex  items-center justify-center gap-[30px] ">
                <img class="size-[25px]" :src="visual" alt="">
                <div class="flex flex-col items-center max-w-[620px] gap-[16px] ">
                    <Badge :icon="badge4" title="benefits" />
                    <h2 class="heading2 text-center md:text-[42px] font-medium">Key Benefits of Courses</h2>
                    <p class="p1 text-center">Explore the incredible advantages of enrolling in our courses and
                        enhancing your skills for the ultimate career success.</p>
                </div>

                <img class="size-[25px]" :src="visual" alt="">
            </div>
            <!-- heading end -->


            <div class="grid-offer">
                <BenefitCard 
                v-for="benefit in benefits"
                :key="benefit.title"
                v-bind="benefit"
                />
            </div>
        </div>
    </section>
</template>