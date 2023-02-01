<template>
  <div class="relative">
    <header class="fixed z-10 right-1">
    <TheNavigation/>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.router-link-exact-active {
  color: #12b488
}
</style>