<script setup lang="ts">
import { skillCategories } from '@/config/data'
import SkillTag from '@/components/sections/SkillTag.vue'
</script>

<template>
  <section id="skills" class="bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 class="text-2xl font-bold text-slate-900 mb-10">Skills</h2>

      <div class="flex flex-col gap-8">
        <div
          v-for="cat in skillCategories"
          :key="cat.category"
        >
          <h3 class="text-xs font-mono font-semibold uppercase tracking-widest
                     text-slate-400 mb-3">
            {{ cat.category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <SkillTag
              v-for="skill in cat.skills"
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
