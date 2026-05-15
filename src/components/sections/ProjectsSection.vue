<script setup lang="ts">
import { projects } from '@/config/data'
import ProjectCard from '@/components/sections/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 class="text-2xl font-bold text-slate-900 mb-10">Projects</h2>

      <!-- 响应式：1列 → 2列（md）→ 3列（lg） -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
