<script setup>
import {  badge3 } from '../assets';
import { Badge,Button } from '../components';

</script>

<template>
    <section class="py-[96px] px-[60px] flex items-center justify-center gap-[10px]">
        <div class="max-w-screen-xl flex flex-col items-start justify-center gap-[60px]">
            <!-- heading start -->
            <div class="w-full flex items-center justify-between border">
                <!-- text content start -->
                <div class="flex flex-col  gap-[16px] max-w-[620px]">
                    <Badge 
                    :icon="badge3"
                    title="Testimonials"
                    />
                    <h2 class="heading2 md:text-[42px] font-medium">Our Students feedback</h2>
                    <p class="p2 max-w-lg">Explore the incredible advantages of enrolling in our courses and enhancing your skills.</p>
                    <Button buttonClass="bg-slate-900 text-white text-lg font-inter">Start learning now</Button>
                </div>
                <!-- text-content end -->

            </div>
            <!-- heading end -->
        </div>
    </section>
</template>