<template>
  <div class="relative w-full">
    <HeroSection />
    <AboutSection data-aos="zoom-in"/>
    <SkillsSection data-aos="zoom-in"/>
    <ProjectsSection data-aos="zoom-in"/>
    <div class="md:block hidden fixed left-0 bottom-0 ml-4">
      <SideSocialBar/>
    </div>
  </div>
</template>

<script setup>
import ProjectsSection from "../components/Home/ProjectsSection";
</script>

<style scoped>

</style>