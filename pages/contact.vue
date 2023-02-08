<template>
  <div class="text-center">
    <h2 class="m-2">Contact section</h2>
<!--    <button @click="changeVisibility">Transition</button>-->
    <transition-slide :offset="[0, -16]">
      <p v-if="isVisible">Slide me</p>
    </transition-slide>
    <TransitionFade appear>
      <div class="text-center" data-aos="zoom-in">
        <h1 class="m-2">Transitions / aos playground</h1>
        <Icon name="uil:github" />
      </div>
    </TransitionFade>
  </div>
</template>

<script setup>

  const isVisible = ref(false)
  const changeVisibility = () => {
    isVisible.value = !isVisible.value
    }

   onMounted(() => {
     changeVisibility()
   })
</script>

<style scoped>

</style>