<script setup>
import { ref } from 'vue';
import { logo, menu, x } from '../assets';
import { Button } from '../components';
import { navLinks } from '../constans/';

const isOpen = ref(false);
</script>

<template>
    <nav class="z-40 w-full overflow-hidden fixed top-0 mx-auto bg-white/10 backdrop-blur-3xl overflow-hidden">
        <div class="daisy-navbar flex justify-between py-[16px] px-[50px] max-w-screen-xl mx-auto max-md:px-2">
            <img class="h-[34px] w-[150px]" :src="logo" alt="Logo">
            
            <!-- Navbar Links -->
            <div class="flex gap-20 max-md:hidden">
                <a 
                    class="capitalize daisy-btn-ghost p-2 daisy-hover:bg-color1 rounded-xl text-lg"
                    v-for="(link, index) in navLinks" 
                    :key="index"
                    href="#"
                >
                    {{ link }}
                </a>
            </div>

            <!-- Right Section -->
            <div class="flex">
                <Button :icon="true" buttonClass="bg-slate-900 p1 text-white max-md:hidden">Demo template</Button>

                <!-- Toggle Button -->
                <button @click="isOpen = !isOpen" class="md:hidden">
                    <img class="size-10" :src="isOpen ? x : menu" alt="Menu">
                </button>
            </div>
        </div>
    </nav>

    <!-- Drawer -->
    <div 
        v-show="isOpen" 
        class="fixed inset-0 top-[66px] md:hidden bg-black/50 z-[100] flex justify-end ease-in-out transition-opacity"
        @click.self="isOpen = false"
    >
        <div class="bg-black  w-full h-screen p-5 shadow-lg">
            <div class="flex flex-col w-full gap-4">
                <a 
                    class="capitalize daisy-btn-ghost text-white p-2 daisy-hover:bg-color1 rounded-xl text-lg" 
                    v-for="(link, index) in navLinks" 
                    :key="index"
                    href="#"
                >
                    {{ link }}
                </a>
            </div>
        </div>
    </div>
</template>
