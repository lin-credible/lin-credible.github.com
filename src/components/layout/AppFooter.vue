<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-100 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
      <p class="text-xs text-slate-400">
        &copy; {{ year }} Colin Tao. Built with Vue 3 &amp; Tailwind CSS.
      </p>
    </div>
  </footer>
</template>
