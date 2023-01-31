<template>
  <button @click="$emit('toggleActive')" :class="{ 'hamburger--active': active }" class="hamburger mt-2 absolute right-0">
        <span class="hamburger__box">
          <span class="hamburger__inner"></span>
        </span>
  </button>
</template>

<script setup>

defineProps({
  active: {
    type: Boolean,
    required: true
  }
})

</script>

<style scoped>
.hamburger {
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  transition: transform 0.2s ease-in-out;
  -webkit-tap-highlight-color:transparent;
}

.hamburger__box {
  width: 50px;
  height: 30px;
  display: inline-block;
  position: relative;
}

.hamburger__inner {
  width: 30px;
  height: 3px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  transition: background-color 0.2s 0.1s ease-in-out;
}

.hamburger__inner::before,
.hamburger__inner::after {
  content: "";
  left: 0;
  width: 30px;
  height: 3px;
  background-color: white;
  position: absolute;
  transition: transform 0.2s 0.1s ease-in-out;
}

.hamburger__inner::before {
  top: -10px;
}

.hamburger__inner::after {
  top: 10px;
}

.hamburger--active .hamburger__inner {
  background-color: transparent;
}

.hamburger--active .hamburger__inner::before {
  transform: translateY(10px) rotate(45deg);
}

.hamburger--active .hamburger__inner::after {
  transform: translateY(-10px) rotate(-45deg);
}

</style>