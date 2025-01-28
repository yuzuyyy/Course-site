<script setup>
import { Socmeds } from '.';
import { profile } from '../assets';

</script>

<template>
    <div class="daisy-btn-card bg-color3/10 w-[350px] rounded-3xl flex flex-col gap-8">
        <figure>
            <img class="rounded-t-3xl w-full" :src="profile" alt="">
        </figure>
        <div class="daisy-btn-card-body flex flex-col p-6 pb-8 ">
            <div class=" flex flex-col gap-6">
                <div class="flex flex-col gap-1">
                    <p class="p1">I started my journey:</p>
                    <p class="">In web design and development in 2010 at the age of 24. I transitioned into a full-time
                        instructor and mentor in 2018</p>
                </div>

                <div class="flex flex-col gap-1">
                    <p class="p1">Through hands-on:</p>
                    <p>project-based courses, I simplify challenging topics and make them accessible to everyone.</p>
                </div>
                <Socmeds />
            </div>

        </div>
    </div>
</template>