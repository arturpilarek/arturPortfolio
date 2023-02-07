<template>
  <nav class="bg-accent absolute right-0 " :class="active ? 'nav--visible' : 'nav--hidden'">
    <div class="w-full h-full grid place-items-center pb-20">
      <ul class="flex flex-col gap-8">
        <transition-slide class="h-6 w-24" :offset="[-32, 0]" group duration="500">
          <li v-if="active"><a @click="$emit('toggleActive')" href="#home">Home</a></li>
        </transition-slide>
        <transition-slide class="h-6 w-24" :offset="[-32, 0]" group duration="750">
          <li v-if="active"><a @click="$emit('toggleActive')" href="#about">About</a></li>
        </transition-slide>
        <transition-slide class="h-6 w-24" :offset="[-32, 0]" group duration="1000">
          <li v-if="active"><a @click="$emit('toggleActive')" href="#skills">Skills</a></li>
        </transition-slide>
        <transition-slide class="h-6 w-24" :offset="[-32, 0]" group duration="1250">
          <li v-if="active"><a @click="$emit('toggleActive')" href="#projects">Projects</a></li>
        </transition-slide>
<!--        <transition-slide class="h-6 w-24" :offset="[-32, 0]" group duration="1500">-->
<!--          <li v-if="active"><a @click="$emit('toggleActive')" href="#">Blog</a></li>-->
<!--        </transition-slide>-->
        <transition-slide class="h-6 w-24" :offset="[-32, 0]" group duration="1750">
          <li v-if="active"><a @click="$emit('toggleActive')" class="font-whitneyBold" href="#contact">Contact me</a></li>
        </transition-slide>
      </ul>
      <transition-slide class="social-icons absolute bottom-4 flex gap-4 block w-full justify-center" :offset="[0, 32]"
                        group duration="1000">
        <a v-if="active" href="https://github.com/arturpilarek" target="_blank">
          <Icon @click="$emit('toggleActive')" name="uil:github"/>
        </a>
        <a v-if="active" href="https://www.linkedin.com/in/artur-pilarek/" target="_blank">
          <Icon @click="$emit('toggleActive')" name="uil:linkedin"/>
        </a>
        <a v-if="active" href="mailto:artur.pilarek@gmail.com">
          <Icon @click="$emit('toggleActive')" name="ic:baseline-mail"/>
        </a>
        <a v-if="active" href="artur-pilarek-CV.pdf" target="_blank">
          <Icon @click="$emit('toggleActive')" name="academicons:cv"/>
        </a>
      </transition-slide>
    </div>
  </nav>
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

svg {
  width: 30px;
  height: 30px;
}

nav {
  height: 528px;
  width: 210px;

  transform: translateY(-528px);
}

.nav--visible {
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
}

.nav--hidden {
  transform: translateX(110%);
  transition: transform 0.3s ease-in-out;
}

</style>