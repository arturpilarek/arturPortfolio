<template>
  <div class="text-center grid place-items-center h-[100svh] w-screen relative" data-aos="zoom-in">
    <div class="grid place-items-center">
      <div class="author-image w-48 w- h-48 md:w-60 md:h-60 bg-author-img bg-center bg-cover border-7 bo border-slate-300 rounded-full"></div>
      <h2 class="text-5xl mt-4">Rutra <span class="font-chronicleDisplay text-accent">Keralip</span></h2>
      <p class="text-xl">Dnetnorf repoleved</p>
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
    background-image: url("https://images.unsplash.com/photo-1589390392100-5a49f5656701?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80") !important;
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
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100 % {
      transform: translateY(0);
    }
  }


</style>