<template>
  <div class="social-bar flex flex-col gap-2.5 items-center relative left-0 bottom-0  max-w-[1588px]">
    <a href="https://github.com/arturpilarek" target="_blank"><Icon name="uil:github" /></a>
    <a href="https://www.linkedin.com/in/artur-pilarek/" target="_blank"><Icon name="uil:linkedin" /></a>
    <a href="mailto:artur.pilarek@gmail.com"><Icon name="ic:baseline-mail" /></a>
    <a href="artur-pilarek-CV.pdf" target="_blank"><Icon name="academicons:cv" /></a>
    <div class="line-shape"></div>
  </div>
</template>

<script setup>

</script>

<style scoped>

  svg {
    width: 30px;
    height: 30px;
  }

  .line-shape {
    width: 3.5px;
    height: 60px;
    background-color: white;

  }

  /*.social-bar:before {*/
  /*  content: "";*/
  /*  position: absolute;*/
  /*  display: block;*/
  /*  width: 1px;*/
  /*  height: 30px;*/
  /*  background-color: white;*/
  /*  bottom: 0*/
  /*}*/

</style>