<script setup lang="ts">
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 font-sans">
    <AppNavbar />
    <main>
      <HeroSection />
      <SkillsSection />
    </main>
    <AppFooter />
  </div>
</template>
