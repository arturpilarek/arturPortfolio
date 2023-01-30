export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@morev/vue-transitions/nuxt',
        'nuxt-icon'
    ],
    components: {
        // @ts-ignore
        path: '~/components/',
        pathPrefix: false
    }
})
