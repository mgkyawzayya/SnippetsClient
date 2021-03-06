let env = require('dotenv').config()
export
default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - Snippets',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }, {
            rel: 'styleseet',
            href: 'https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap'
        }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },
    /*
     ** Global CSS
     */
    css: [
        '~/assets/styles/app.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: env.parsed.API_URL
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'auth/signin',
                        method: 'post',
                        propertyName: 'data.token'
                    },
                    user: {
                        url: 'auth/me',
                        method: 'get',
                        propertyName: 'data'
                    },
                    logout: {
                        url: 'auth/signout',
                        method: 'post'
                    }
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        postcss: {
            plugins: {
                tailwindcss: './tailwind.config.js'
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
