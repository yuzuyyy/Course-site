<script setup>
import { logo } from '../assets';
import {Button} from '../components'
import {navLinks} from '../constans/'


</script>

<template>
    <nav class="absolute bg-transparent top-0 z-50  w-full overflow-hidden">
        <div class="daisy-navbar  flex justify-between py-[16px] px-[50px] max-w-screen-xl mx-auto ">
            <img class="h-[34px] w-[150px] " :src="logo" alt="">
            <div class="flex gap-20 ">
                <a class="capitalize daisy-btn-ghost p-2 daisy-hover:bg-color1 rounded-xl  text-lg" v-for="link in navLinks" href="">{{ link }}</a>
            </div>

            <div class="flex ">

               <Button 
               :icon="true"
               buttonClass="bg-slate-900 p1 text-white">Demo template</Button>
            </div>
        </div>
    </nav>
</template>