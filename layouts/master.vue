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

    <div @click.away="showMenu = false" style="z-index: 500"
         :class="showMenu ? 'tw-flex tw-flex-col': 'tw-hidden md:tw-flex md:tw-flex-row'"
         class="tw-inset-x-0 tw-absolute tw-top-14 md:tw-sticky md:tw-top-0 tw-bg-red-600 tw-text-sm tw-py-2 tw-px-4 md:tw-px-12 md:tw-flex-row md:tw-items-center tw-justify-between">
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
          height="400px"
        >
          <v-card>
            <v-card-title>
              <span class="tw-text-lg">Politique de confidentialité</span>
            </v-card-title>
            <v-card-text>
              <p class="tw-text-sm md:tw-text-base">Vous trouverez ici une vue d'ensemble de la manière dont nous traitons vos données personnelles, des objectifs pour lesquels nous les traitons et de la manière dont vous en bénéficiez. Vous verrez également quels sont vos droits et comment vous pouvez nous contacter.</p>

              <h1 class="tw-text-base tw-font-semibold tw-underline tw-text-gray-800">Quelles sont les données que nous collectons ?</h1>
              <p class="tw-text-sm md:tw-text-base">
                Nous stockons les données personnelles que vous nous donnez lorsque vous faites une réservation ou enregistrez vos préférences. Celles-ci comprennent notamment :
                -	Le nom et les prénoms
                -	Le numéro de la carte d’identité ou du passeport
                -	L’adresse e-mail
                -	Le numéro de téléphone
                -	L’adresse de départ et d’arrivée
                -	La date de départ et d’arrivée
                Les données de réservation sont automatiquement supprimées de la base de données du site <strong>un(1) an</strong> après leur enregistrement.
                Les données sont collectées dès que vous souscrivez à un service sur notre site web.
              </p>

              <h1 class="tw-text-base tw-font-semibold tw-underline tw-text-gray-800">Pourquoi collectons-nous vos données personnelles ?</h1>
              <div class="tw-text-sm md:tw-text-base">
                Nous collectons vos données personnelles exclusivement pour l’accès aux services que nous proposons sur notre site, notamment :
                <ul class="list-disc">
                  <li>La réservation de billets de vols,</li>
                  <li>La réservation de lieux d’hébergement,</li>
                  <li>La réservation de voitures,</li>
                  <li>La visitation de lieux touristiques,</li>
                  <li>Les procédures d’obtention de visas</li>
                </ul>
              </div>

              <h1 class="tw-text-base tw-font-semibold tw-underline tw-text-gray-800">Qui peut accéder à vos données personnelles et pourquoi ?</h1>
              <p class="tw-text-sm md:tw-text-base">
                Nous ne transférons pas vos données à des tiers, nous ne les utilisons pas pour des activités commerciales, et nous ne les partageons avec personne.
              </p>

              <h1 class="tw-text-base tw-font-semibold tw-underline tw-text-gray-800">Quels sont vos droits sur vos données personnelles ?</h1>
              <p class="tw-text-sm md:tw-text-base">
                Si vous ne souhaitez plus que les données personnelles collectées lors de vos réservations figurent dans le système, il vous suffit d’envoyer un message
                à l’administrateur du site via le chat intégré disponible en bas à gauche du site ou par le biais du formulaire de contact disponible sur la page de contact. La même procédure est valable si vous souhaitez disposer d’une copie des données enregistrées dans le système. Dans ce dernier cas, vous devrez joindre à votre message l’adresse mail de réception.
                <br>Vos données vous seront envoyées ou seront supprimées dans un délai de sept jours après votre demande
              </p>

              <h1 class="tw-text-base tw-font-semibold tw-underline tw-text-gray-800">Sécurité et conservation des données.</h1>
              <p class="tw-text-sm md:tw-text-base">Nous utilisons diverses mesures pour préserver la confidentialité et la sécurité de vos données personnelles, notamment en limitant l'accès à vos données personnelles en fonction des besoins et en suivant les normes de sécurité appropriées pour protéger vos données.</p>

              <h1 class="tw-text-base tw-font-semibold tw-underline tw-text-gray-800">Nous contacter</h1>
              <p class="tw-text-sm md:tw-text-base">Manglam Tours & Travels est situé à Lomé dans le quartier Dékon, en face de AKIF. Vous pouvez nous joindre par mail via l’adresse <strong>manglam@tour.com</strong> ou par téléphone en appelant le <strong>+ 228 96 69 09 81</strong> ou le <strong>+ 33 422 567 89</strong>.</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="tw-flex tw-w-full tw-flex-col tw-justify-center md:tw-flex-row tw-items-center">
                <v-btn
                  color="green darken-1"
                  text
                  class="tw-underline tw-text-xs"
                  @click="setPolicyToCookie(false)"
                >
                  Continuer sans accepter
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  class="tw-text-xs"
                  @click="setPolicyToCookie(true)"
                >
                  J'accepte
                </v-btn>
              </div>
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
import Cookies from 'js-cookie'
import {mapGetters} from "vuex";

export default {
  name: 'master',
  components: {Header},
  data() {
    return {
      showMenu: false,
      showConfidentialPolicyForm: null,
      acceptPolitique: null,
    }
  },

  methods: {
    setPolicyToCookie(accept){
      Cookies.set('accepted_politique_confidentialite', JSON.stringify(accept), { expires: false ? 365 : null })
      this.showConfidentialPolicyForm = false
    },
  },

  mounted() {
    if(Cookies.get('accepted_politique_confidentialite') === undefined){
      Cookies.set('accepted_politique_confidentialite', JSON.stringify(false), { expires: false ? 365 : null })
      this.showConfidentialPolicyForm = true
    }else{
      if(JSON.parse(Cookies.get('accepted_politique_confidentialite'))){
        this.showConfidentialPolicyForm = false
      }else{
        this.showConfidentialPolicyForm = true
      }
    }

    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/639c8031daff0e1306dcfc83/1gkdl9has';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();

    // if(!localStorage.getItem('accepted_polconf')){
    //   this.dialogPo = true
    // }
    // if(!Cookies.get('accepted_politique_confidentialite')){
    //   this.dialogPo = true
    // }


    // this.showConfidentialPolicyForm =! this.selected_accept_politique_de_confifentialite
  }
}
</script>

<style>

</style>
