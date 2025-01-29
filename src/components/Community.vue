<script setup>
import { badge8,earth } from '../assets';
import { Badge, Button } from '../components';
import { vectors, reviews } from '../constans'
import ReviewsCard from './ReviewsCard.vue';


</script>

<template>
    <section class="relative py-[96px] px-[60px] overflow-hidden">
        <!-- vectors -->
        <div class="flex gap-6 mx-auto translate-x-1/2 mb-12">
            <img class="size-8" v-for="vector in vectors " :src="vector" alt="">
        </div>
        <div class="mx-auto max-w-screen-xl flex flex-col items-start justify-center gap-[60px]  ">
            <!-- heading start -->
            <div class="w-full flex items-center justify-between ">
                <!-- text content start -->
                <div class="flex flex-col  gap-[16px] max-w-[620px]">
                    <Badge :icon="badge8" title="Testimonials" />
                    <h2 class="heading2 md:text-[42px] font-medium">Join our community where creativity thrives.</h2>
                    <p class="p1 max-w-[420px]">Unlock the amazing benefits of joining our community, growing your skills, and building connections.</p>
                    <Button buttonClass="bg-slate-900 text-white text-lg font-inter hover:bg-color1">Start learning
                        now</Button>
                </div>
                <!-- text-content end -->

                    <div class=" absolute right-6">
                        
                        <img 
                        class=" max-w-[800px] h-[500px] object-contain"
                        :src="earth" alt="">
                    </div>
            
            </div>
            <!-- heading end -->
        </div>
    </section>
</template>