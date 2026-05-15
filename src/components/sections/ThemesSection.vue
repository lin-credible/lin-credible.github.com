<script setup lang="ts">
import { themes } from '@/config/data'
</script>

<template>
  <section id="themes" class="bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 class="text-2xl font-bold text-slate-900 mb-10">Themes</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div
          v-for="theme in themes"
          :key="theme.label"
          class="flex flex-col gap-1"
        >
          <!-- 标签：等宽/全大写，极简风格 -->
          <span class="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400">
            {{ theme.label }}
          </span>
          <p class="text-base md:text-lg font-medium text-slate-900 leading-snug">
            {{ theme.headline }}
          </p>
          <p
            v-if="theme.description"
            class="text-sm text-slate-500 leading-relaxed mt-1"
          >
            {{ theme.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
