<template>
  <section class="bg-secondary w-screen">
    <div class="container mx-auto p-10">
     <div class="w-fit">
      <h2 data-aos="zoom-in" class="text-3xl xl:text-5xl lg:text-4xl">Contact me</h2>
      <div data-aos="zoom-in" class="intersection  w-[115%] h-0.5 bg-white mb-2 mt-1"></div>
     </div>
        <p data-aos="zoom-in" class="font-whitneyMedium pb-2 xl:text-xl lg:text-base">I am currently seeking new opportunities, including internship this summer and/or study job right now. Please reach out to discuss potential opportunities. </p>
    <form data-aos="zoom-in" class="w-full md:w-3/5 xl:w-2/5 mt-4 text-primary flex flex-col justify-center gap-4 items-start" @submit.prevent="handleSubmit">
      <input class="custom-input" name="Name" type="text" placeholder="Name" required />
      <input class="custom-input" name="Email" type="email" placeholder="Email" required />
      <input class="custom-input" name="Subject" type="text" placeholder="Subject" required />
      <textarea class="custom-input" name="Message" placeholder="Message" required />
      <button class="text-white bg-accent hover:bg-accent-hover p-3 rounded-md text-lg border-2 border-tertiary focus:border-white" type="submit">Send a message</button>
    </form>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'

const config = useRuntimeConfig();

async function handleSubmit(e){
  await axios
      .post(`${config.FORMEEZY_ENDPOINT}`, new FormData(e.target))
      .then(({ data }) => {
        const { redirect } = data;
        window.location.href = redirect;
      });
}

</script>


<style scoped>

  input, textarea {
    background-color: ;
  }

</style>