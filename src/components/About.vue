<script setup>
import { visual, badge5 } from '../assets';
import { Badge, CertificateBanner } from '.';
import { certificates } from '../constans';
import { computed } from 'vue';
import { ProfileCard } from '.';

const pair1 = computed(() => certificates.slice(0,2))
const pair2 = computed(() => certificates.slice(-2))
</script>

<template>
  <section class="section-padding">
    <div class="mx-auto max-w-screen-xl flex flex-col items-center justify-center gap-[44px]">
      <!-- heading start -->
      <div class="flex items-center justify-center gap-[30px]">
        <img class="size-[25px] max-md:hidden" :src="visual" alt="" />
        <div class="flex flex-col items-center max-w-[620px] gap-[16px]">
          <Badge :icon="badge5" title="about me" />
          <h2 class="heading2 text-center md:text-[42px] font-medium">
            But Why CourseSite ?
          </h2>
          <p class="p1 text-center">
            Explore the incredible advantages of enrolling in our courses and
            enhancing your skills for the ultimate career success.
          </p>
        </div>
        <img class="size-[25px] max-md:hidden" :src="visual" alt="" />
      </div>
      <!-- heading end -->

      <div class="grid-offer w-full">
        <div class="max-xl:hidden">
            <CertificateBanner
              v-for="certificate in pair1"
              :key="certificate.title"
              v-bind="certificate"
            />
        </div>
        <ProfileCard />
        <div class="xl:hidden">
          <CertificateBanner
              v-for="certificate in certificates"
              :key="certificate.title"
              v-bind="certificate"
            />
        </div>
    
        <div class="max-xl:hidden">
            <CertificateBanner
              v-for="certificate in pair2"
              :key="certificate.title"
              v-bind="certificate"
            />
        </div>
      </div>
    </div>
  </section>
</template>
