<script setup>
import { visual } from '../assets';
import { badge6 } from '../assets';
import { Badge } from '.';
import { contacts } from '../constans'
</script>

<template>
    <section class=" py-[96px] px-[60px]">
        <div class="mx-auto max-w-screen-xl flex  items-start justify-center gap-[60px]  ">
            <!-- heading start -->
            <div class="flex flex-col gap-[30px]">
                <!-- text content start -->
                <div class="flex flex-col  gap-[16px] ">
                    <Badge :icon="badge6" title="faq hub" />
                    <h2 class="heading2 md:text-[42px] font-medium">Frequently Asked Questions!</h2>
                    <div class="daisy-card p-8 w-[400px] shadow-sm shadow-black rounded-3xl">
                        <div class="daisy-btn-card-body flex flex-col gap-6">
                            <h3 class="text-2xl font-inter font-semibold">Still Have Questions?</h3>
                            <p class="p2"><span class="underline">Contact Us</span>, We are happy to help you</p>
                            <div class="daisy-avatar-group -space-x-3">
                                <div v-for="contact  in contacts" class="daisy-avatar daisy-mask daisy-mask-hexagon">
                                    <div class="w-12">
                                        <img :src="contact" alt="">
                                    </div>
                                </div>
                            </div>
                            <button class="w-fit daisy-btn bg-black text-white text-lg rounded-full ">Start learning
                                now</button>
                        </div>
                    </div>
                </div>
                <!-- text-content end -->
            </div>
            <!-- heading end -->


        </div>
    </section>
</template>