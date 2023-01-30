<template>
  <div class="text-center">
    <h2 class="m-2">Blog section</h2>
    <button @click="changeVisibility">Transition</button>
    <transition-fade>
      <div v-if="isVisible">BOOOOM</div>
    </transition-fade>
  </div>
</template>

<script setup>

  const isVisible = ref(false)
  const changeVisibility = () => {
    console.log(isVisible)
    isVisible.value = !isVisible.value
  }

</script>

<style scoped>

</style>