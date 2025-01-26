<script setup>
import { companies } from '../constans';
</script>

<template>
    <div class="bg-gray-300  flex w-full">
        <img 
            v-for="company in companies"
            :key="company" 
            :src="company" 
            alt="Company Logo"
            class="h-[35px] w-[130px] mx-5" />
    </div>
</template>
