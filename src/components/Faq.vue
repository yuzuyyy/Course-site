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
    <section class="section-padding">
        <div class="mx-auto max-w-screen-xl flex items-start justify-center gap-[60px] max-md:flex-col">
            <!-- Heading Start -->
            
                <!-- Text Content Start -->

                <div class="flex flex-col gap-[16px] items-start max-md:flex-col  max-md:items-center">
                    <Badge :icon="badge6" title="faq hub" />
                    <h2 class="heading2 text-[42px] font-medium text-start max-xl:text-center max-xl:text-[32px]">Frequently Asked Questions!</h2>
                    <div class="daisy-card  min-w-[400px] shadow-md shadow-black rounded-3xl max-md:p-4">
                        <div class="daisy-card-body flex flex-col items-start gap-6 max-md:p-2">
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
            
            <!-- Heading End -->

            <!-- Accordions Start -->
            <div class="flex-1 flex flex-col gap-8 max-md:flex-none">
               
                <div 
                v-for="accordion in accordions"
                :key="accordion.Q"
                class="daisy-collapse daisy-collapse-plus  p-6 max-md:p-1 shadow-sm shadow-black bg-white">
                    <input type="checkbox" class="daisy-collapse-toggle" />
                    <div class="daisy-collapse-title text-xl font-medium p1 max-md:text-start">{{accordion.Q}}</div>
                    <div class="daisy-collapse-content ">
                        <p class="max-md:text-start">
                            {{accordion.A}}
                        </p>
                    </div>
                </div>
               
            </div>
            <!-- Accordions End -->
        </div>
    </section>
</template>
