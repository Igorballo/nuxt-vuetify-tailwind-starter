import fr from 'vuetify/src/locale/fr'
import en from 'vuetify/src/locale/fr'


export default {
  //loading: "~/components/loading.vue",
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: "Mek's Management Système |",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' },
      { rel: 'icon', sizes: '16x16', href: '/favicon.png' },

      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ],
  },
  /*
  ** Global CSS
  */
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    "~/plugins/fireauth.js",
    "~/plugins/fakeauth.js",
    "~/plugins/simplebar.js",
    "~/plugins/vue-click-outside.js",
    "~/plugins/vuelidate.js",
    "~/plugins/draggable.js",
    "~/plugins/vue-slidebar.js",
    "~/plugins/tour.js",
    "~/plugins/vue-lightbox.js",
    "~/plugins/mask.js",
    "~/plugins/quill-editor.js",
    "~/plugins/chartist.js",
    "~/plugins/vue-googlemap.js",
    "~/plugins/vue-marquee-component.js",
    "~/plugins/string-filter",
    "~/plugins/axios.js",
    "~/plugins/vue-moment.js",
    "~/plugins/mixins.js",
    "~/plugins/requiredimport.js",
    "~/plugins/maz-ui.js",

  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@vueuse/nuxt',
    ['@nuxtjs/vuetify', {
      iconfont: "mdi", // 'md' || 'mdi' || 'fa' || 'fa4'
      lang: {
        locales: { fr, en},
        current: 'fr',
      },
      theme: {
        themes:{
          light: {
            primary: '#b71c1c',
            secondary: '#b0bec5',
            dark: '#b0bec5',
            accent: '#006958',
            error: '#f0ad4e',
            success: '#5cb85c',
            warning:'#f0ad4e',
            background: '#f8f8f8'
          },
        }
      },
    }],
    '@nuxtjs/dotenv'
  ],
  css: ['~/assets/css/main.css'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    /*'bootstrap-vue/nuxt',*/
    'nuxt-i18n',
    'nuxt-client-init-module',
    // With options
    ['nuxt-leaflet', { /* module options */ }],
  ],
  i18n: {
    locales: ['en', 'fr', 'es', 'ar'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        fr: require('./locales/fr.json'),
        es: require('./locales/es.json'),
        ar: require('./locales/ar.json'),
        zh: require('./locales/zh.json')
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
  },
  env: {
    auth: process.env.VUE_APP_DEFAULT_AUTH,
    apikey: process.env.VUE_APP_APIKEY,
    authdomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseurl: process.env.VUE_APP_DATABASEURL,
    projectid: process.env.VUE_APP_PROJECTId,
    storgebucket: process.env.VUE_APP_STORAGEBUCKET,
    message: process.env.VUE_APP_MESSAGINGSENDERID,
    appid: process.env.VUE_APP_APPId,
    measurement: process.env.VUE_APP_MEASUREMENTID,
  }
}

