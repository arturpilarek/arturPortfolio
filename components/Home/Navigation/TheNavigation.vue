<template>
  <header class="">
    <div class="overlay absolute bg-primary opacity-80 w-screen h-screen" @click="toggleActive" :class="active ? 'block' : 'hidden'" ></div>
      <div class="relative w-screen">
        <MobileNavigation :active="active"/>
        <HamburgerMenu @toggleActive="toggleActive" :active="active"/>
      </div>

  </header>
</template>

<script setup>

  const active = ref(false)

  const toggleActive = () => {
    active.value = !active.value
  }

</script>

<style scoped>
</style>