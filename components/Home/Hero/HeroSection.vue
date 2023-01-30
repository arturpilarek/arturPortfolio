<template>
  <div class="text-center grid place-items-center h-screen w-screen relative" data-aos="zoom-in">
    <div class="">
      <div class="author-image w-40 h-40 md:w-60 md:h-60 bg-author-img bg-center bg-cover border-7 bo border-slate-300 rounded-full"></div>
      <h2>Artur Pilarek</h2>
      <p>Frontend developer</p>
<!--      <Icon name="uil:github" />-->
    </div>
      <div class="overlay bg-primary opacity-75 absolute -z-10 w-full h-full"></div>
      <div class="bg-hero-bg bg-center bg-cover absolute -z-20 w-full h-full"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>

  .author-image {
    border-color: #E66614;
  }

  svg {
    width: 48px;
    height: 48px;
  }
</style>