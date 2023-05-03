<template>
  <div class="text-center grid place-items-center h-[100svh] w-screen relative" data-aos="zoom-in">
    <div class="grid place-items-center">
      <div class="author-image w-48 w- h-48 md:w-60 md:h-60 bg-author-img bg-center bg-cover border-7 bo border-slate-300 rounded-full"></div>
      <h2 class="text-5xl mt-16">Artur <span class="font-chronicleDisplay text-accent">Pilarek</span></h2>
      <p class="text-xl">Frontend developer</p>
    </div>
      <div class="overlay bg-primary opacity-70 absolute -z-10 w-full h-full"></div>
      <div class="bg-hero-bg bg-center bg-cover absolute -z-20 w-full h-full"></div>
    <Icon name="ic:round-keyboard-arrow-down" class="chevron-down absolute bottom-3.5"/>
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

  .chevron-down {
    animation: float 2s infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
    100 % {
      transform: translateY(-6px);
    }
  }


</style>