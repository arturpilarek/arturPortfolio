<template>
  <div class="relative w-full">
    <HeroSection id="home" />
    <AboutSection id="about" data-aos="zoom-in"/>
    <SkillsSection id="skills"/>
    <ProjectsSection id="projects"/>
    <ContactSection id="contact"/>
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