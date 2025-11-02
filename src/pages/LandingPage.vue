<template>
  <div class="flex flex-col min-h-full h-full bg-green items-start text-left p-24">
    <h1 class="text-4xl font-bold text-gray-900 pb-8">WRITEUPS</h1>
    <p>here you can find some of my writeups</p>
    <div class="flex flex-row min-w-full pt-8">
      <div class="flex-[1] mr-24">
        <filters />
      </div>
      <div class="flex-[5]">
        <Table />
      </div>
    </div>
    <router-link to="/about" class="text-accent underline mt-6"> Go to About → </router-link>
  </div>
</template>

<script setup>
import Table from '@/components/Table.vue'
import Filters from '../components/Filters.vue'
</script>
