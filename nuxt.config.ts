export default defineNuxtConfig({
    nitro: {
        preset: 'firebase'
    },
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
