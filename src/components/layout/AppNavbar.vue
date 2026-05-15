<script setup lang="ts">
import { ref } from 'vue'
import { profile } from '@/config/data'

const isMobileMenuOpen = ref(false)
const navItems = [
  { label: 'Home',   href: '#hero'   },
  { label: 'Skills', href: '#skills' },
]
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <span class="text-slate-900 font-semibold text-lg tracking-tight">
        {{ profile.name }}
      </span>

      <!-- 桌面端横排导航 -->
      <div class="hidden md:flex items-center gap-6">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-150
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- 移动端 Hamburger -->
      <button
        class="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900
               hover:bg-slate-100 transition-colors duration-150 focus:outline-none
               focus-visible:ring-2 focus-visible:ring-slate-900"
        aria-label="Toggle navigation menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <svg
          v-if="!isMobileMenuOpen"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- 移动端展开菜单（带入场动画） -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-slate-100 bg-white px-4 pb-4 pt-2 flex flex-col gap-1"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="block py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-150"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>
