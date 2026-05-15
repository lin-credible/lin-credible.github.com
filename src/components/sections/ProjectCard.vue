<script setup lang="ts">
import type { Project } from '@/config/data'

defineProps<{ project: Project }>()
</script>

<template>
  <div
    class="flex flex-col h-full bg-white border border-slate-200 rounded-lg p-5
           hover:shadow-md hover:border-slate-300
           transition-shadow transition-colors duration-200 cursor-default"
  >
    <h3 class="text-base font-semibold text-slate-900 mb-2">{{ project.name }}</h3>
    <p class="text-sm text-slate-500 leading-relaxed flex-1">{{ project.description }}</p>

    <!-- 技术栈标签 -->
    <div class="flex flex-wrap gap-1.5 mt-4">
      <span
        v-for="tech in project.techStack"
        :key="tech"
        class="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
      >
        {{ tech }}
      </span>
    </div>

    <!-- 外链按钮（有外链才渲染） -->
    <div
      v-if="project.githubUrl || project.demoUrl"
      class="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100"
    >
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source on GitHub"
        class="text-xs text-slate-500 hover:text-slate-900 transition-colors duration-150"
      >
        GitHub ↗
      </a>
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View live demo"
        class="text-xs text-slate-500 hover:text-slate-900 transition-colors duration-150"
      >
        Demo ↗
      </a>
    </div>
  </div>
</template>
