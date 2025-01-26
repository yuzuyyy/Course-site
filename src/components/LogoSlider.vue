<script setup>
import { companies } from '../constans';
</script>

<template>
    <div class=" flex w-full overflow-hidden p-4">
        <div class="flex items-center  animate-marquee">
            <!-- Gambar pertama -->
            <div class="flex bg-black/10 rounded-3xl">
                <img 
                    v-for="company in companies"
                    :key="company"
                    :src="company"
                    alt="Company Logo"
                    class="h-[30px] w-[130px] mx-4"
                />
            </div>

            <div class="flex bg-black/10 rounded-3xl">
                <img 
                    v-for="company in companies"
                    :key="company"
                    :src="company"
                    alt="Company Logo"
                    class="h-[30px] w-[130px] mx-4"
                />
            </div>

            <div class="flex bg-black/10 rounded-3xl">
                <img 
                    v-for="company in companies"
                    :key="company"
                    :src="company"
                    alt="Company Logo"
                    class="h-[30px] w-[130px] mx-4"
                />
            </div>
           
            
        </div>
    </div>
</template>

<style scoped>
@keyframes marquee {
    0% {
        transform: translateX(100%);
    }
    25% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-100%);
    }
    75% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
}

.animate-marquee {
    display: flex;
    animation: marquee 15s ease-in-out infinite;
    width: 200%; /* Membuat panjangnya dua kali lipat */
}
</style>
