export default defineNuxtConfig({
    app: {
        head: {
            title: 'Artur Pilarek',
            htmlAttrs: { lang: 'en' },
            meta: [
                { charset: 'utf-8' },
                {name: "description", content: "Artur Pilarek is a frontend developer who specializes in building web applications and delivering exceptional user experiences."}
            ]
        }
    },
    nitro: {
        preset: 'firebase'
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@morev/vue-transitions/nuxt',
        '@nuxt/content',
        'nuxt-icon'
    ],
    components: {
        // @ts-ignore
        path: '~/components/',
        pathPrefix: false
    },
    runtimeConfig: {
        public: {
            FORMEEZY_ENDPOINT: process.env.FORMEEZY_ENDPOINT
        }
    },
})
