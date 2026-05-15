<script setup lang="ts">
import { profile } from '@/config/data'
</script>

<template>
  <section id="hero" class="bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div class="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <!-- 头像（首屏 eager load，不懒加载） -->
        <div class="flex-shrink-0 mx-auto md:mx-0">
          <img
            :src="profile.avatarUrl"
            :alt="`${profile.name} avatar`"
            loading="eager"
            class="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover
                   bg-slate-100 ring-2 ring-slate-200"
          />
        </div>

        <div class="text-center md:text-left">
          <h1 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {{ profile.name }}
          </h1>
          <p class="mt-2 text-base md:text-lg text-slate-500">
            {{ profile.tagline }}
          </p>
          <blockquote
            class="mt-4 border-l-2 border-slate-300 pl-4
                   text-sm italic text-slate-500 max-w-sm md:max-w-md"
          >
            "{{ profile.quote }}"
          </blockquote>

          <!-- 社交快捷链接 -->
          <div class="mt-6 flex items-center gap-4 justify-center md:justify-start">
            <a
              v-for="link in profile.socialLinks"
              :key="link.platform"
              :href="link.url"
              :aria-label="link.ariaLabel"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-500 hover:text-slate-900 transition-colors duration-150
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
            >
              <!-- ⚠️ iconSvg 只来自 data.ts 静态字符串，禁止动态拼接 -->
              <span class="w-5 h-5 block [&>svg]:w-5 [&>svg]:h-5" v-html="link.iconSvg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
