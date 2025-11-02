<template>
  <div class="overflow-x-auto">
    <table class="min-w-full rounded-lg">
      <thead class="text-gray-500">
        <tr>
          <th class="px-6 py-3 text-left font-normal">title</th>
          <th class="px-6 py-3 text-left font-normal">cats</th>
          <th class="px-6 py-3 text-left font-normal">tags</th>
          <th class="px-6 py-3 text-center font-normal">date</th>
        </tr>
      </thead>
      <tbody class="divide-y-2 divide-gray-500 divide-dashed">
        <tr
          v-for="(user, index) in users"
          :key="index"
          class="hover:bg-black hover:text-red-900 transition-all duration-[200ms]"
        >
          <td class="px-6 py-3 font-medium">{{ user.name }}</td>
          <td class="px-6 py-3">{{ user.email }}</td>
          <td class="px-6 py-3">{{ user.role }}</td>
          <td class="px-6 py-3 text-center">
            <span
              :class="[
                'px-3 py-1 rounded-full text-xs font-semibold',
                user.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
              ]"
            >
              {{ user.active ? 'Active' : 'Inactive' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const users = [
  { name: 'Alice Tan', email: 'alice@example.com', role: 'Admin', active: true },
  { name: 'Ben Wong', email: 'ben@example.com', role: 'Editor', active: false },
  { name: 'Chloe Lim', email: 'chloe@example.com', role: 'Viewer', active: true },
]
</script>
