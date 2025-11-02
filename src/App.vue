<template>
  <div
    class="min-h-screen bg-background flex flex-col items-center justify-start pt-16 text-center"
  >
    <div class="absolute left-10 right-10 top-10 bottom-10 border-4 border-gray-900">
      <div class="absolute right-6 top-6">Back to main site</div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
