<script setup>
import { feature1, star, bars } from '../assets';
import { Stars } from '../components';
const stars = [1, 2, 3, 4, 5];

const props = defineProps({
    image: {
        type: String,
        default: feature1
    },
    title: {
        type: String,
        default: "Your title",
    },
    desc: {
        type: String,
        default: "Master JavaScript with our updated course"
    },
    price: {
        type: String,
        default: "89"
    },
    level: {
        type: String,
        default: "beginner"
    }
})

</script>

<template>
    <div class="daisy-card bg-base-100 w-[400px] shadow-sm shadow-black tilt-3d rounded-3xl max-xl:w-[350px] ">
        <!-- Gambar full width -->
        <figure class="w-full">
            <img 
                :src="image" 
                alt="Feature Image" 
                class="w-full h-[230px] object-cover rounded-t-xl" 
            />
        </figure>
        <div class="daisy-card-body daisy-items-start gap-6 p-6">
            <!-- Bagian rating dengan bintang -->

            <div class="flex items-center ">
                <Stars />
                <p class=" font-bold text-xl font-inter  text-end">{{ price }}<span class="text-lg">$</span></p>
            </div>
            <!-- Judul dan deskripsi -->
            <h2 class="card-title heading4 line-clamp-1">
               {{ title }}
            </h2>
            <p class="p1 font-thin text-lg line-clamp-2">
               {{ desc }}
            </p>
            <!-- Bagian fitur dan level -->
            <div class="daisy-card-actions items-center justify-between">
                <button class="daisy-btn bg-color2/20 text-color2 p2">Featured</button>
                <div class="flex items-center">
                    <img 
                        class="h-5 w-5 mr-2"
                        :src="bars" 
                        alt="Level Icon"
                    />
                    <p class="capitalize font-inter">{{ level }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
