<template>
  <header class="">
    <div class="overlay absolute bg-primary opacity-80 w-screen h-screen" @click="toggleActive" :class="active ? 'block' : 'hidden'" ></div>
      <div class="mobile-nav relative w-screen sm:hidden">
        <MobileNavigation @click="toggleActive" :active="active"/>
        <HamburgerMenu @toggleActive="toggleActive" :active="active"/>
      </div>
      <div class="desktop-nav relative w-screen mt-6 hidden sm:block">
        <DesktopNavigation/>
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