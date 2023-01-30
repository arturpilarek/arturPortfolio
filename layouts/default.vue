<template>
  <div class="relative">
<!--    <header class="fixed shadow-sm bg-white">-->
<!--      <nav class="container mx-auto p-4">-->
<!--        <ul class="flex gap-4">-->
<!--          <li><NuxtLink to="/">Home</NuxtLink></li>-->
<!--          <li><NuxtLink to="/blog">Blog</NuxtLink></li>-->
<!--          <li><NuxtLink class="btn" to="/contact">Contact</NuxtLink></li>-->
<!--        </ul>-->
<!--      </nav>-->
<!--    </header>-->
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