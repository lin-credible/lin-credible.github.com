<script setup lang="ts">
import { contacts } from '@/config/data'
</script>

<template>
  <section id="contact" class="bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 class="text-2xl font-bold text-slate-900 mb-10">Contact</h2>

      <div class="flex flex-wrap gap-6">
        <a
          v-for="contact in contacts"
          :key="contact.platform"
          :href="contact.url"
          :aria-label="contact.ariaLabel"
          v-bind="contact.url.startsWith('mailto:')
            ? {}
            : { target: '_blank', rel: 'noopener noreferrer' }"
          class="flex items-center gap-2 text-slate-600 hover:text-slate-900
                 transition-colors duration-150
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
        >
          <!-- ⚠️ iconSvg 只来自 data.ts 静态字符串，禁止动态拼接 -->
          <span class="w-5 h-5 flex-shrink-0 [&>svg]:w-5 [&>svg]:h-5" v-html="contact.iconSvg" />
          <span class="text-sm">{{ contact.label }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
