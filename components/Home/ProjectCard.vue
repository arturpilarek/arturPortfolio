<template>
  <div class="projectCard my-5">
    <div class="projectCard__image w-full relative">
      <div class="overlay bg-primary opacity-50 absolute z-10 w-full h-full"></div>
      <img :src="handleImageUrl()" class="w-full" alt="Project image"  />
    </div>
    <div class="projectCard__content">
      <div class="content__title-wrapper flex justify-between py-2 items-center w-full">
        <h3 class="text-xl">{{ project.title }}</h3>
        <div class="link-wrapper flex gap-2">
          <a class="text-xl rounded-md py-1 px-2 bg-accent border-accent border-2 font-whitneyMedium" :href="project.demoUrl" target="_blank">Demo</a>
          <a class="text-xl rounded-md py-1 px-2 border-accent border-2 font-whitneyMedium" :href="project.githubUrl" target="_blank">Code</a>
        </div>
      </div>
      <div class="content__description-wrapper">
        <article class="bg-tertiary border-accent border-2 p-6 font-whitneyMedium text-sm rounded-md">{{ project.content }}</article>
        <ul class="flex">
          <li class="mt-[6px] mr-[6px] tex px-3 py-[6px] text-tagText bg-tertiary rounded-md " v-for="tag in project.tags">{{ tag }}</li>
        </ul>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {project} = defineProps(["project"])

function handleImageUrl() {
  return `images/${project.imageFileName}`
  // return project.imageFileName
}
// console.log(handleImageUrl())
</script>

<style scoped>

</style>