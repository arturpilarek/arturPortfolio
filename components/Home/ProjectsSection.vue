<template>
  <section class="container mx-auto p-10">
    <div data-aos="zoom-in" class="w-fit">
      <h2 data-aos="zoom-in" class="text-3xl xl:text-5xl lg:text-4xl">Featured Projects</h2>
      <div data-aos="zoom-in" class="intersection  w-[115%] h-0.5 bg-white mb-2 mt-1"></div>
<!--      <p class="pb-2 text-[11px] xl:text-xl lg:text-base">"Experience is the name everyone gives to their mistakes." - Oscar Wilde</p>-->
    </div>
    <div class="w-full pb-8">
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