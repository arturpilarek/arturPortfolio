export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    components: {
        // @ts-ignore
        path: '~/components/',
        pathPrefix: false
    }
})
