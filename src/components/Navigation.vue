<script setup>
import { logo } from '../assets';

const links = ["course", "reviews", "contact"]

</script>

<template>
    <nav class="">
        <div class="daisy-navbar border flex justify-between p-4 max-w-screen-xl mx-auto ">
            <img 
            class="h-[34px] w-[150px] "
            :src="logo" alt="">
            <div class="flex gap-20 ">
                <a 
                class="capitalize daisy-btn-ghost "
                v-for="link in links"
                href="">{{ link }}</a>
            </div>

            <button class="daisy-btn  daisy-btn-wide text-xl rounded-full bg-color6/40 backdrop-blur-3xl capitalize border-none shadow-sm shadow-white">View all courses</button>
        </div>
    </nav>
</template>