<script setup>
import { defineProps } from 'vue';
import { checklist, x } from '../assets'; // Pastikan asset ini benar
import { Button } from '../components'; // Pastikan Button sudah terhubung
// import { tailwindMerge } from "tailwind-merge";

const props = defineProps({
    plan: {
        type: Object,
        required: true, // Plan wajib diberikan
    },
});
</script>

<template>
    <div class="relative daisy-card p-6 w-[400px] rounded-2xl shadow-md shadow-black border-2"
        :class="plan.isPopular ? 'border-purple-500' : 'border-transparent'">
        <!-- Popular Tag -->
        <div v-if="plan.isPopular"
            class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 text-xs rounded-full">
            Popular Plan
        </div>

        <div class="daisy-card-body flex flex-col gap-8">
            <!-- Plan Name -->
            <p class="text-center text-lg font-bold">{{ plan.name }}</p>

            <!-- Price Section -->
            <div class="flex items-center flex-col gap-2 p-6 shadow-sm shadow-black rounded-2xl bg-color2/10">
                <p>
                    <span class="text-3xl font-semibold">${{ plan.price.toFixed(2) }}</span>
                    /mo
                </p>
                <p class="text-gray-500">Billed annually</p>
            </div>

            <!-- Benefits Section -->
            <div class="flex flex-col gap-2">
                <div v-for="(benefit, index) in plan.benefits" :key="index" class="flex items-center gap-2">
                    <img class="w-6 h-6" :src="benefit.available ? checklist : x" alt="icon" />
                    <p class="text-lg font-inter">{{ benefit.text }}</p>
                </div>
            </div>

            <!-- Button -->
            <button :class="{ 'bg-slate-900 text-white': plan.isPopular }"
                class="daisy-btn text-lg daisy-btn-circle daisy-btn-wide w-full daisy-btn-outline">
                Get started
            </button>

        </div>
    </div>
</template>

<style scoped>
/* Tambahkan style jika diperlukan */
</style>
