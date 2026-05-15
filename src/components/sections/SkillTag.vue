<script setup lang="ts">
import type { Skill } from '@/config/data'

defineProps<{ skill: Skill }>()
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 px-3 py-1.5
           text-sm text-slate-700 bg-slate-100
           rounded-md border border-slate-200
           hover:border-slate-400 transition-colors duration-150
           select-none"
  >
    <!-- ⚠️ iconSvg 只来自 data.ts 静态字符串，禁止动态拼接 -->
    <span
      v-if="skill.iconSvg"
      class="w-4 h-4 flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4"
      v-html="skill.iconSvg"
    />
    {{ skill.name }}
  </span>
</template>
