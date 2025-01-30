<script setup>
import { logo } from '../assets';
import {Button} from '../components'
import {navLinks} from '../constans/'


</script>

<template>
    <nav class=" z-50  w-full overflow-hidden fixed top-0 mx-auto bg-white/10 backdrop-blur-3xl">
        <div class="daisy-navbar  flex justify-between py-[16px] px-[50px] max-w-screen-xl mx-auto max-md:px-2">
            <img class="h-[34px] w-[150px] " :src="logo" alt="">
            <div class="flex gap-20 max-md:hidden ">
                <a class="capitalize daisy-btn-ghost p-2 daisy-hover:bg-color1 rounded-xl  text-lg" v-for="link in navLinks" href="">{{ link }}</a>
            </div>

            <div class="flex ">
               <Button 
               :icon="true"
               buttonClass="bg-slate-900 p1 text-white max-md:hidden">Demo template</Button>
            </div>
        </div>
    </nav>
</template>