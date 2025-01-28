<script setup>
import { badge6 } from '../assets';
import { Badge } from '.';
import { contacts } from '../constans';
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
            <div class="flex-1">
                <!-- Accordion Item 1 -->
                <div class="daisy-collapse daisy-collapse-plus bg-base-200">
                    <input type="checkbox" class="daisy-collapse-toggle" />
                    <div class="daisy-collapse-title text-xl font-medium">What is Course Site?</div>
                    <div class="daisy-collapse-content">
                        <p>
                            CourseSite is an innovative platform designed to empower learners and professionals
                            with the skills and knowledge they need to excel in today's fast-paced world.
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 2 -->
                <div class="daisy-collapse daisy-collapse-plus bg-base-200 mt-4">
                    <input type="checkbox" class="daisy-collapse-toggle" />
                    <div class="daisy-collapse-title text-xl font-medium">Why Choose Course Site?</div>
                    <div class="daisy-collapse-content">
                        <p>
                            We offer cutting-edge content, expert instructors, and a flexible learning
                            experience tailored to your needs.
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 3 -->
                <div class="daisy-collapse daisy-collapse-plus bg-base-200 mt-4">
                    <input type="checkbox" class="daisy-collapse-toggle" />
                    <div class="daisy-collapse-title text-xl font-medium">How to Get Started?</div>
                    <div class="daisy-collapse-content">
                        <p>
                            Simply sign up, browse our courses, and start your learning journey with ease.
                        </p>
                    </div>
                </div>
            </div>
            <!-- Accordions End -->
        </div>
    </section>
</template>
