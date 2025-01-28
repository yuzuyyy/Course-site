<script setup>
import { visual, badge5 } from '../assets';
import { Badge } from '.';
</script>

<template>
    <section class="py-[96px] px-[60px]">
        <div class="mx-auto max-w-screen-xl flex flex-col items-center justify-center gap-[44px]">
             <!-- heading start -->
             <div class="flex  items-center justify-center gap-[30px] ">
                <img class="size-[25px]" :src="visual" alt="">
                <div class="flex flex-col items-center max-w-[620px] gap-[16px] ">
                    <Badge :icon="badge5" title="about me" />
                    <h2 class="heading2 text-center md:text-[42px] font-medium">But Why CourseSite ?</h2>
                    <p class="p1 text-center">Explore the incredible advantages of enrolling in our courses and enhancing your skills for the ultimate career success.</p>
                </div>

                <img class="size-[25px]" :src="visual" alt="">
            </div>
            <!-- heading end -->

            <div>
                
            </div>
        </div>
    </section>
</template>