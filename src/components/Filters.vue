<template>
  <div class="flex flex-col mx-[-1rem]">
    <div
      class="overflow-x-auto mt-6 hover:bg-black hover:text-red-900 transition-all duration-[200ms] px-4 py-3 rounded-3xl cursor-pointer"
      @click="cycleState"
    >
      chronological
      <span v-if="state === 1">↓</span>
      <span v-else-if="state === 2">↑</span>
    </div>

    <div
      class="overflow-x-auto mt-6 hover:bg-black hover:text-red-900 transition-all duration-[200ms] px-4 py-3 rounded-xl"
    >
      categorical
    </div>

    <div
      class="overflow-x-auto mt-6 hover:bg-black hover:text-red-900 transition-all duration-[200ms] px-4 py-3 rounded-xl"
    >
      team membership
    </div>

    <div
      class="overflow-x-auto mt-6 hover:bg-black hover:text-red-900 transition-all duration-[200ms] px-4 py-3 rounded-xl"
    >
      competition
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const state = ref(0)

function cycleState() {
  state.value = (state.value + 1) % 3
}
</script>
