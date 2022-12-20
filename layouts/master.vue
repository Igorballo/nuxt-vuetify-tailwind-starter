<template>
  <v-app class="tw-relative">
    <div style="z-index: 999"
         class="tw-sticky tw-top-0 lg:tw-static tw-flex tw-items-center tw-px-4 lg:tw-px-12 tw-py-2 tw-justify-between tw-w-full tw-bg-white">
      <!--      Manglam Logo-->
      <a href="/" class="tw-h-25 tw-w-72 lg:tw-w-1/3"><img src="../assets/img/MANGLAM-IATA-LOGO-TEXTE.png"
                                                           alt="Manglam-logo"></a>

      <div class="tw-inline-flex tw-items-center tw-gap-4">
        <!--  Choose language button      -->
        <button
          class="tw-text-black tw-hidden tw-text-sm tw-uppercase tw-bg-white tw-bg-gray-200 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-300 tw-font-bold tw-rounded-lg tw-text-md tw-px-2 tw-py-2 tw-text-center lg:tw-inline-flex tw-items-center"
          type="button">
          français
          <svg class="tw-ml-2 tw-w-4 tw-h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <!--Show sidebar button-->
        <button v-show="!showMenu" @click="showMenu = true" class="md:tw-hidden">
          <img class="tw-h-6 tw-w-6" src="../assets/svg/menu.svg" alt="Menu-icon">
        </button>
        <button v-show="showMenu" @click="showMenu = false"
                class="md:tw-hidden tw-bg-black tw-text-white tw-rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="tw-w-6 tw-h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </button>
      </div>
    </div>

    <div @click.away="showMenu = false" style="z-index: 999"
         :class="showMenu ? 'tw-flex tw-flex-col': 'tw-hidden md:tw-flex md:tw-flex-row'"
         class="tw-inset-x-0 tw-absolute tw-top-16 md:tw-sticky md:tw-top-0 tw-bg-red-600 tw-text-sm tw-py-2 tw-px-4 md:tw-px-12 md:tw-flex-row md:tw-items-center tw-justify-between">
      <ul class="tw-flex tw-flex-col md:tw-flex-row md:tw-items-center tw-text-md tw-pb-2 md:tw-pb-0 tw-px-0">
        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">
          <div :class="$route.path === '/' ? 'tw-bg-red-700': 'tw-bg-transparent hover:tw-bg-red-700'"
               @click="$router.push('/')" class="tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="tw-w-5 tw-h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"/>
            </svg>

            <span class="tw-whitespace-nowrap">Accueil</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">
          <div :class="$route.path === '/reservation-vols' ? 'tw-bg-red-700': 'tw-bg-transparent hover:tw-bg-red-700'"
               @click="$router.push('/reservation-vols')"
               class="tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-lg">
            <img class="tw-h-4 tw-w-4 tw-text-white" src="../assets/svg/airplane.svg">
            <span class="tw-whitespace-nowrap">Reservation de vols</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">
          <div :class="$route.path === '/hotel' ? 'tw-bg-red-700': 'tw-bg-transparent hover:tw-bg-red-700'"
               @click="$router.push('/hotel')" class="tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="tw-w-4 tw-h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
            </svg>
            <span class="tw-whitespace-nowrap">Hébergements</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">
          <div :class="$route.path === '/car-location' ? 'tw-bg-red-700': 'tw-bg-transparent hover:tw-bg-red-700'"
               @click="$router.push('/car-location')" class="tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-lg">
            <img class="tw-h-4 tw-w-4 tw-text-white" src="../assets/svg/car.svg">
            <span class="tw-whitespace-nowrap">Location de voitures</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">
          <div :class="$route.path === '/tourisme' ? 'tw-bg-red-700': 'tw-bg-transparent hover:tw-bg-red-700'"
               @click="$router.push('/tourisme')" class="tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="tw-w-4 tw-h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/>
            </svg>
            <span class="tw-whitespace-nowrap">Tourisme</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">
          <div :class="$route.path === '/visa-assurance' ? 'tw-bg-red-700': 'tw-bg-transparent hover:tw-bg-red-700'"
               @click="$router.push('/visa-assurance')" class="tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-lg">
            <v-icon color="white">mdi-seat-recline-extra</v-icon>
            <span class="tw-whitespace-nowrap">Visa & Assurance</span>
          </div>
        </li>
      </ul>

      <ul
        class="tw-flex tw-flex-col md:tw-flex-row tw-whitespace-nowrap tw-text-white tw-gap-1 tw-border-t-2 md:tw-border-0 tw-px-0 tw-pt-2 md:tw-pt-0 tw-text-sm">
        <li class="tw-text-white tw-font-semifont-bold">
          <div :class="$route.path === '/about' ? 'tw-bg-red-700': 'tw-bg-transparent hover:tw-bg-red-700'"
               @click="$router.push('/about')"
               class="tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-lg tw-cursor-pointer">
            <span class="tw-whitespace-nowrap">A propos</span>
          </div>
        </li>

        <li class="tw-text-white tw-font-semifont-bold">
          <div :class="$route.path === '/contact' ? 'tw-bg-red-700': 'tw-bg-transparent hover:tw-bg-red-700'"
               @click="$router.push('/contact')"
               class="tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-lg tw-cursor-pointer">
            <span class="tw-whitespace-nowrap">Nous contacter</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">
          <button
            class="tw-text-black lg:tw-hidden tw-text-sm tw-uppercase tw-bg-red-200 hover:tw-bg-red-300 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-300 tw-font-bold tw-rounded-lg tw-text-md tw-px-2 tw-py-2 tw-text-center tw-inline-flex tw-items-center"
            type="button">
            français
            <svg class="tw-ml-2 tw-w-4 tw-h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </li>
      </ul>
    </div>

    <!--Aside Bar-->
    <div class=" tw-hidden lex tw-w-full tw-h-screen tw-absolute tw-inset-0" style="z-index: 998">
      <div class="tw-hidden md:tw-block tw-w-full tw-bg-gray-900 tw-bg-opacity-60"></div>
      <div class="tw-w-full md:tw-w-[52vh] tw-bg-white"></div>
    </div>

    <nuxt/>

    <!--    Politique de confidebtialité-->
    <div style="z-index: 999">
      <div justify="center">
        <v-dialog
          v-model="showConfidentialPolicyForm"
          width="600px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">Politique de confidentialité de Manglan!</span>
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed
              ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue
              in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat
              orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc
              tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis.
              Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh
              praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
              Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut
              erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo
              taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi .
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="setPolicyToCookie(false)"
              >
                Plus tard
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                @click="setPolicyToCookie(true)"
              >
                J'accepte
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>

    <Footer/>
  </v-app>
</template>

<script>

import Header from "../components/Header";
import {mapGetters} from "vuex";

export default {
  name: 'master',
  components: {Header},
  data() {
    return {
      showConfidentialPolicyForm: null,
      acceptPolitique:  false,
      showMenu: false,
      // test: null,
    }
  },

  methods: {
    setPolicyToCookie(accept){
      this.acceptPolitique = accept
      this.$store.dispatch('user/setAcceptPolitiqueDeConfidentialite', this.acceptPolitique)
      this.showConfidentialPolicyForm = false
    }
  },

  computed: {
    // showConfidentialPolicyForm(){
    //   if(this.acceptPolitique){
    //     return false
    //   }
    //   return true
    // },

    ...mapGetters('user', [
      'selected_accept_politique_de_confifentialite',
    ]),
  },


  mounted() {

    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/639c8031daff0e1306dcfc83/1gkdl9has';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();

    this.showConfidentialPolicyForm =! this.selected_accept_politique_de_confifentialite

  }
}
</script>

<style>

</style>
