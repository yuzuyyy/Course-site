<script setup>
import { badge6 } from '../assets';
import { Badge } from '.';
import { contacts, accordions } from '../constans';

const props = defineProps({
    Q : {
        type: String
    },
    A: {
        type: String
    }
    
})
</script>

<template>
    <section class="py-[96px] px-[60px]">
        <div class="mx-auto max-w-screen-xl flex items-start justify-center gap-[60px]">
            <!-- Heading Start -->
            <div class="flex flex-col gap-[30px]">
                <!-- Text Content Start -->
                <div class="flex flex-col gap-[16px]">
                    <Badge :icon="badge6" title="faq hub" />
                    <h2 class="heading2 md:text-[42px] font-medium">Frequently Asked Questions!</h2>
                    <div class="daisy-card p-8 w-[400px] shadow-sm shadow-black rounded-3xl">
                        <div class="daisy-card-body flex flex-col gap-6">
                            <h3 class="text-2xl font-inter font-semibold">Still Have Questions?</h3>
                            <p class="p2"><span class="underline">Contact Us</span>, We are happy to help you</p>
                            <div class="daisy-avatar-group -space-x-3">
                                <div v-for="contact in contacts" :key="contact" class="daisy-avatar daisy-mask daisy-mask-hexagon">
                                    <div class="w-12">
                                        <img :src="contact" alt="" />
                                    </div>
                                </div>
                            </div>
                            <button class="w-fit daisy-btn bg-black text-white text-lg rounded-full">Start learning now</button>
                        </div>
                    </div>
                </div>
                <!-- Text Content End -->
            </div>
            <!-- Heading End -->

            <!-- Accordions Start -->
            <div class="flex-1 flex flex-col gap-8">
                <!-- Accordion Item 1 -->
                <div 
                v-for="accordion in accordions"
                :key="accordion.Q"
                class="daisy-collapse daisy-collapse-plus bg-base-200 p-6 shadow-sm shadow-black bg-color1/10">
                    <input type="checkbox" class="daisy-collapse-toggle" />
                    <div class="daisy-collapse-title text-xl font-medium">{{accordion.Q}}</div>
                    <div class="daisy-collapse-content">
                        <p>
                            {{accordion.A}}
                        </p>
                    </div>
                </div>

         
              

               
            </div>
            <!-- Accordions End -->
        </div>
    </section>
</template>
