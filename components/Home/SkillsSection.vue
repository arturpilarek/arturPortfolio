<template>
  <section class=" bg-secondary   w-screen ">
    <div class="container mx-auto p-10">
    <h2 data-aos="zoom-in" class="text-3xl xl:text-5xl lg:text-4xl">Skills</h2>
    <div data-aos="zoom-in" class="intersection  w-28 xl:w-72 xl:w-48 h-0.5 bg-white mb-2 mt-1"></div>
    <p data-aos="zoom-in" class="pb-2 text-[11px] xl:text-xl lg:text-base">“In the beninging, in the, in the benininngin” - Jacob Zuma</p>
    <div class="max-w-2xl xl:max-w-full  flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap md:justify-center gap-4 items-center xl:flex-row xl:justify-between mx-auto xl:item xl:justify-center mx-auto py-8">
      <div data-aos="zoom-in" class="bg-tertiary border-accent border-2 mih-h-[328px] md:h-[340px] xl:h-[510px] w-[282px] xl:min-w-[406px] py-4 xl:py-8 px-8 xl:px-16 rounded">
        <h3 class="text-xl xl:text-3xl text-center">Frontend skills</h3>
        <div class="list-container font-whitneyMedium">
          <div class="flex justify-center gap-8 xl:gap-12 text-xs xl:text-lg mt-3.5 mb-8 xl:mb-14 text-no-wrap">
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

      <div data-aos="zoom-in" class="bg-tertiary border-accent border-2 mih-h-[328px] md:h-[340px] xl:h-[510px] w-[282px] xl:min-w-[406px] py-4 xl:py-8 px-8 xl:px-16 rounded">
        <h3 class="text-xl xl:text-3xl text-center text-no-wrap">Tools and Backend</h3>
        <div class="list-container font-whitneyMedium">
          <div class="flex justify-center gap-8 xl:gap-12 text-xs xl:text-lg mt-3.5 mb-8 xl:mb-8 xl:mb-14 text-no-wrap">
            <ul class="list ">
              <li>Firebase</li>
              <li>Sanity.io</li>
              <li>Wordpress</li>
              <li>Git & GitHub</li>
              <li>NPM</li>
            </ul>
            <ul>
              <li>WebStorm</li>
              <li>VSC</li>
              <li>Figma</li>
              <li>Adobe Xd</li>
              <li>Sketch</li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-3  gap-6">
          <Icon class="justify-self-left" name="vscode-icons:file-type-firebase"/>
          <Icon class="justify-self-center" name="logos:sanity"/>
          <Icon class="justify-self-right" name="skill-icons:wordpress"/>
          <Icon class="justify-self-left" name="skill-icons:github-dark"/>
          <Icon class="justify-self-center" name="logos:webstorm"/>
          <Icon class="justify-self-right" name="logos:visual-studio-code"/>
          <Icon class="justify-self-left" name="skill-icons:figma-dark"/>
          <Icon class="justify-self-center" name="logos:adobe-xd"/>
          <Icon class="justify-self-right" name="vscode-icons:file-type-sketch"/>
        </div>
      </div>

      <div data-aos="zoom-in" class="bg-tertiary border-accent border-2 w-[282px] xl:min-h-[510px] xl:min-w-[406px] py-4 xl:py-8 px-8 xl:px-16 rounded">
        <h3 class="text-xl xl:text-3xl text-center">Currently learning</h3>
        <div class="list-container font-whitneyMedium">
          <div class="text-xs xl:text-lg mt-3.5 mb-8 xl:mb-14 text-no-wrap">
            <ul class="list">
              <li>Angular</li>
              <li>AWS</li>
              <li>Node & Express.js</li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-3  gap-6">
          <Icon class="justify-self-left" name="logos:angular-icon"/>
          <Icon class="justify-self-center" name="skill-icons:aws-dark"/>
          <Icon class="justify-self-right" name="skill-icons:expressjs-dark"/>
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
  
  @media screen and (min-width: 1280px) {
    svg {
      width: 53px;
    }
  }


</style>