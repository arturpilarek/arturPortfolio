<template>
  <section class="container mx-auto p-10">
    <div data-aos="zoom-in">
      <h2 class="text-3xl xl:text-5xl lg:text-4xl">Featured Projects</h2>
      <div class="intersection  w-28 xl:w-72 md:w-48 h-0.5 bg-white mb-2 mt-1"></div>
      <p class="pb-2 text-[11px] xl:text-xl lg:text-base">“Tell me and I forget, teach me and I may remember, involve me and I learn” - Benjamin Franklin</p>
    </div>
    <div class="w-full py-8">
      <ProjectCard data-aos="zoom-in" v-for="(projectData, index) in parsedData" key="projectData.id" :noIntersection="index === (parsedData.length - 1)" :reversePosition="Boolean(index % 2)" :project="projectData"/>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
const parsedData = data._rawValue.projects
</script>

<style scoped>

</style>