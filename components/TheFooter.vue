<template>
  <footer class="w-full h-40 text-base  bg-secondary flex flex-col items-center justify-center">
    <div class="flex items-center md:text-lg gap-[6px] md:gap-[10px]">
      <p>Developed & designed with </p>
      <Icon name="skill-icons:nuxtjs-dark"/>
      <Icon name="vscode-icons:file-type-firebase"/>
      <Icon name="vscode-icons:file-type-tailwind"/>
      <p>and</p>
      <Icon name="noto:heart-suit"/>
    </div>
    <p class="text-sm md:text-base pt-2">by Artur Pilarek</p>
  </footer>
</template>

<script setup>

</script>

<style scoped>

  svg {
    height: 24px;
    width: 24px;
  }

  @media screen and (min-width: 640px) {
    svg {
      height: 34px;
      width: 34px;
    }
  }

</style>