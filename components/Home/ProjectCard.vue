<template>
  <div class="projectCard md:my-12">
    <div class="  md:h-[400px] w-full h-full relative md:flex md:items-center ">
      <div
          class="projectCard__image  w-full relative md:absolute md:top-1/2 md:-translate-y-1/2 md:h-[400px]  md:w-9/12 lg:w-3/6 h-full"
          :class="{'md:right-0' : reversePosition, 'md:left-0' : !reversePosition}">
          <div class="overlay bg-primary opacity-50 absolute z-10 w-full h-full"></div>
          <img :src="handleImageUrl()" class="w-full md:h-[400px] object-scale-down xl:object-contain object-left" :class="{'object-right' : reversePosition}" alt="Project image">
      </div>
      <div class="projectCard__content md:z-20 md:pl-[25%] lg:pl-[35%] xl:pl-[25%]  md:pr-[15%] lg:pr-[15%] xl:pr-[25%]"
           :class="{'md:pl-[15%] lg:pl-[15%] md:pr-[25%] lg:pr-[35%] xl:pr-[25%]' : reversePosition, 'md:pl-[25%] lg:pl-[35%] md:pr-[15%] lg:pr-[15%]' : !reversePosition}">
        <div class="content__title-wrapper flex justify-between py-2 items-center w-full"
             :class="{'md:flex-row-reverse' : reversePosition}">
          <h3 class="text-xl md:text-2xl xl:text-3xl">{{ project.title }}</h3>
          <div class="link-wrapper flex gap-2">
            <a v-if="project.demoUrl" class="text-lg md:text-xl xl:text-2xl rounded-md py-1 px-2 xl:px-3 bg-accent border-accent border-2 font-whitneyMedium" :href="project.demoUrl" target="_blank">Demo</a>
            <a class="text-xl md:text-xl xl:text-2xl rounded-md py-1 px-2 md:px-3 border-accent border-2 font-whitneyMedium" :href="project.githubUrl" target="_blank">Code</a>
          </div>
        </div>
        <div class="content__description-wrapper">
          <article class="bg-tertiary border-accent border-2 p-6 font-whitneyMedium text-sm md:text-base rounded-md">{{ project.content }}</article>
          <ul class="flex flex-wrap" :class="{'md:justify-start' : reversePosition, 'md:justify-end' : !reversePosition}">
            <li class="mt-[6px] mr-[6px] text-sm md:text-lg px-3 py-[6px] text-tagText bg-tertiary rounded-md" v-for="tag in project.tags">{{ tag }}</li>
          </ul>
        </div>
        <div>
        </div>
      </div>
    </div>
    <div :class="{'hidden' : noIntersection}" class="md:hidden intersection my-8  w-28 xl:w-72 md:w-48 h-0.5 bg-white"></div>
  </div>
</template>

<script setup>
  const {project, reversePosition, noIntersection} = defineProps(["project", "reversePosition", "noIntersection"])

  function handleImageUrl() {
    return `images/${project.imageFileName}`
  }

</script>

<style scoped>
  .reverse-position-image {

  }

  .reverse-position-content {

  }
</style>