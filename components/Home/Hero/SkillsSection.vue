<template>
  <section data-aos="zoom-in" class=" bg-secondary   w-screen ">
    <div class="container mx-auto p-10">
    <h2 class="text-3xl xl:text-5xl lg:text-4xl">Skills</h2>
    <div class="intersection  w-28 xl:w-72 md:w-48 h-0.5 bg-white mb-2 mt-1"></div>
    <p class="pb-2 text-[11px] xl:text-xl lg:text-base">“In the beninging, in the, in the benininngin” - Jacob Zuma</p>
    <div class="max-w-2xl md:max-w-full  flex flex-col gap-4 items-center xl:flex-row xl:justify-between mx-auto xl:item md:justify-center mx-auto py-8">
      <div class="bg-tertiary border-accent border-2 mih-h-[328px] md:min-h-[483px] w-[282px] md:min-w-[406px] py-4 md:py-8 px-8 md:px-16 rounded">
        <h3 class="text-xl md:text-3xl text-center">Frontend skills</h3>
        <div class="list-container font-whitneyMedium">
          <div class="flex justify-center gap-8 md:gap-12 text-xs md:text-lg mt-3.5 mb-8 md:mb-14 text-no-wrap">
            <ul class="list ">
              <li>Nuxt.js</li>
              <li>Vue.js 2 & 3</li>
              <li>React</li>
            </ul>
            <ul>
              <li>HTML, CSS, JS</li>
              <li>Typescript</li>
              <li>Sass</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-3  gap-6">
          <Icon class="justify-self-left" name="vscode-icons:file-type-html"/>
          <Icon class="justify-self-center" name="vscode-icons:file-type-js-official"/>
          <Icon class="justify-self-right" name="vscode-icons:file-type-typescript-official"/>
          <Icon class="justify-self-left" name="skill-icons:nuxtjs-dark"/>
          <Icon class="justify-self-center" name="vscode-icons:file-type-vue"/>
          <Icon class="justify-self-right" name="vscode-icons:file-type-reactjs"/>
          <Icon class="justify-self-left" name="vscode-icons:file-type-css"/>
          <Icon class="justify-self-center" name="vscode-icons:file-type-sass"/>
          <Icon class="justify-self-right" name="vscode-icons:file-type-tailwind"/>
        </div>
      </div>

      <div class="bg-tertiary border-accent border-2 mih-h-[328px] md:min-h-[483px] w-[282px] md:min-w-[406px] py-4 md:py-8 px-8 md:px-16 rounded">
        <h3 class="text-xl md:text-3xl text-center">Frontend skills</h3>
        <div class="list-container font-whitneyMedium">
          <div class="flex justify-center gap-8 md:gap-12 text-xs md:text-lg mt-3.5 mb-8 md:mb-14 text-no-wrap">
            <ul class="list ">
              <li>Nuxt.js</li>
              <li>Vue.js 2 & 3</li>
              <li>React</li>
            </ul>
            <ul>
              <li>HTML, CSS, JS</li>
              <li>Typescript</li>
              <li>Sass</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-3  gap-6">
          <Icon class="justify-self-left" name="vscode-icons:file-type-html"/>
          <Icon class="justify-self-center" name="vscode-icons:file-type-js-official"/>
          <Icon class="justify-self-right" name="vscode-icons:file-type-typescript-official"/>
          <Icon class="justify-self-left" name="skill-icons:nuxtjs-dark"/>
          <Icon class="justify-self-center" name="vscode-icons:file-type-vue"/>
          <Icon class="justify-self-right" name="vscode-icons:file-type-reactjs"/>
          <Icon class="justify-self-left" name="vscode-icons:file-type-css"/>
          <Icon class="justify-self-center" name="vscode-icons:file-type-sass"/>
          <Icon class="justify-self-right" name="vscode-icons:file-type-tailwind"/>
        </div>
      </div>

      <div class="bg-tertiary border-accent border-2 mih-h-[328px] md:min-h-[483px] w-[282px] md:min-w-[406px] py-4 md:py-8 px-8 md:px-16 rounded">
        <h3 class="text-xl md:text-3xl text-center">Frontend skills</h3>
        <div class="list-container font-whitneyMedium">
          <div class="flex justify-center gap-8 md:gap-12 text-xs md:text-lg mt-3.5 mb-8 md:mb-14 text-no-wrap">
            <ul class="list ">
              <li>Nuxt.js</li>
              <li>Vue.js 2 & 3</li>
              <li>React</li>
            </ul>
            <ul>
              <li>HTML, CSS, JS</li>
              <li>Typescript</li>
              <li>Sass</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-3  gap-6">
          <Icon class="justify-self-left" name="vscode-icons:file-type-html"/>
          <Icon class="justify-self-center" name="vscode-icons:file-type-js-official"/>
          <Icon class="justify-self-right" name="vscode-icons:file-type-typescript-official"/>
          <Icon class="justify-self-left" name="skill-icons:nuxtjs-dark"/>
          <Icon class="justify-self-center" name="vscode-icons:file-type-vue"/>
          <Icon class="justify-self-right" name="vscode-icons:file-type-reactjs"/>
          <Icon class="justify-self-left" name="vscode-icons:file-type-css"/>
          <Icon class="justify-self-center" name="vscode-icons:file-type-sass"/>
          <Icon class="justify-self-right" name="vscode-icons:file-type-tailwind"/>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

  ul {
    padding-left: 20px;
    list-style: square;
  }

  li {
    font-family: 'Whitney Medium', sans-serif;
  }

  svg {
    width: 32px;
    height: auto;
  }
  
  @media screen and (min-width: 768px) {
    svg {
      width: 53px;
    }
  }

  .justify-self-left {
    justify-self: left;
  }
  .justify-self-center {
    justify-self: center;
  }

  .justify-self-right {
    justify-self: right;
  }

  .text-no-wrap {
    white-space: nowrap;
  }


</style>