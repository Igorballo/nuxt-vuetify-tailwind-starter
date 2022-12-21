<template>
  <div>
    <div>
      <Annonce />
      <v-carousel cycle show-arrows-on-hover hide-delimiter-background height="600" v-model="model">
        <v-carousel-item class="tw-h-full tw-w-full tw-bg-center tw-bg-cover tw-contain tw-bg-auto"
          src="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
          <div class="tw-flex tw-w-full tw-h-full">
            <div
              class="sm:tw-bg-gradient-to-r tw-from-transparent tw-via-transparent tw-to-blue-200 tw-bg-opacity-60 tw-flex tw-items-center tw-justify-end tw-w-full tw-h-full">
              <div class="tw-relative tw-text-center tw-text-blue-800 tw-w-1/2 tw-bg-white tw-rounded tw-py-12 tw-mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                  class="tw-absolute tw-top-2 tw-left-2 tw-w-8 tw-h-8 dark:tw-text-gray-700">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p class="tw-px-6 tw-py-1 tw-italic tw-text-5xl tw-font-extrabold">Manglam Tours & Travel toujours à
                  votre service.</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                  class="tw-absolute tw-bottom-2 tw-right-2 tw-w-8 tw-h-8 dark:tw-text-gray-700">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="tw-h-full tw-w-full tw-bg-cover"
          src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80">
          <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-end">
            <div class="tw-w-full tw-flex tw-m-6 tw-mb-12">
              <div class="tw-bg-white tw-bg-opacity-80 tw-rounded tw-p-4 tw-mx-6">
                <div
                  class="tw-relative tw-text-center tw-text-blue-800 tw-bg-opacity-80 tw-bg-white tw-rounded tw-py-12 tw-m-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                    class="tw-absolute tw-top-2 tw-left-2 tw-w-8 tw-h-8 dark:tw-text-gray-700">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p class="tw-px-6 tw-py-1 tw-italic tw-text-5xl tw-font-extrabold">Global Presence with local
                    expertise.</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                    class="tw-absolute tw-bottom-2 tw-right-2 tw-w-8 tw-h-8 dark:tw-text-gray-700">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="tw-h-full tw-w-full tw-bg-cover"
          src="https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
        </v-carousel-item>
        <v-carousel-item class="tw-h-full tw-w-full tw-bg-cover"
          src="https://images.unsplash.com/photo-1548103981-34316e50b924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80">
        </v-carousel-item>
      </v-carousel>

    </div>


    <section class="tw-pt-4 tw-pb-8 lg:tw-pb-10 lg:tw-px-3 tw-flex-col tw-gap-4 tw-mt-8">
      <div class="">
        <div class="tw-flex tw-flex-col tw-mb-6 tw-px-2 md:tw-px-6 lg:tw-px-10">
          <h1
            class="tw-mt-12 tw-mb-6 tw-text-xl tw-text-center lg:tw-text-3xl tw-font-bold tw-uppercase md:tw-ml-8 md:tw-ml-20 tw-font-extrabold tw-text-red-700">
            Decouvrez nos Services
          </h1>
          <div class="tw-flex tw-justify-center tw-flex-col lg:tw-flex-row md:tw-items-center tw-gap-2">
            <div @click="$router.push('/reservation-vols')"
              class="tw-block tw-cursor-pointer tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img alt="ticket"
                src="https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover" />

              <div class="tw-mt-2">
                <div class="tw-font-bold tw-text-xl tw-text-red-600">Réservation de Vols</div>
                <div>
                  <dd class="tw-font-light tw-text-sm tw-mt-3 tw-text-justify">
                    Vous voyagez seul(e) ou accompagné(e) ? Quel que soit votre lieu de départ ou votre destination,
                    réservez votre billet
                    de vols en deux trois clics !

                  </dd>
                </div>
              </div>
            </div>

            <div @click="$router.push('/hotel')"
              class="tw-block tw-cursor-pointer tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img alt="Home"
                src="https://plus.unsplash.com/premium_photo-1661677878527-052034451487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover" />

              <div class="tw-mt-2">
                <div class="tw-font-bold tw-text-xl tw-text-red-600">Hébergements</div>
                <div>
                  <dd class="tw-font-light tw-text-sm tw-mt-3 tw-text-justify">
                    Trouvez ici les hôtels et les lieux d’hébergements qui vous conviennent afin de passer un séjour
                    agréable et inoubliable
                  </dd>
                </div>
              </div>
            </div>


            <div @click="$router.push('/car-location')"
              class="tw-block tw-cursor-pointer tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img alt="Home"
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover" />

              <div class="tw-mt-2">
                <div class="tw-font-bold tw-text-xl tw-text-red-600">Location de voitures</div>
                <div>
                  <dd class="tw-font-light tw-text-sm tw-mt-3 tw-text-justify">
                    Nous mettons à votre disposition des voitures pour vous accompagner tout au long de votre séjour.
                    Découvrez celles qui
                    sont disponibles ici.
                  </dd>
                </div>
              </div>
            </div>

            <div @click="$router.push('/tourisme')"
              class="tw-cursor-pointer tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img alt="Home"
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover" />

              <div class="tw-mt-2">
                <div class="tw-font-bold tw-text-xl tw-text-red-600">Tourisme</div>
                <div>
                  <dd class="tw-font-light tw-text-sm tw-mt-3 tw-text-justify">
                    Pour rendre votre voyage mémorable, découvrez la liste les sites touristiques disponibles dans la
                    ville où vous vous
                    rendez.
                  </dd>
                </div>
              </div>
            </div>

            <div @click="$router.push('/visa-assurance')"
              class="tw-cursor-pointer tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img alt="Home"
                src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover" />

              <div class="tw-mt-2">
                <div class="tw-font-bold tw-text-xl tw-text-red-600">Visa & Assurance Voyages</div>
                <div>
                  <dd class="tw-font-light tw-text-sm tw-mt-3 tw-text-justify">
                    Nous vous proposons de vous accompagner dans vos procédures de demande de visas et d’assurance.
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tw-pt-4 tw-pb-8 lg:tw-pb-10 lg:tw-px-3 tw-flex-col tw-gap-4">
      <div class="">
        <div class="tw-flex tw-flex-col tw-mb-6 tw-px-2 md:tw-px-6 lg:tw-px-10">
          <h1
            class="tw-mt-12 tw-mb-6 tw-text-xl tw-text-center lg:tw-text-3xl tw-font-bold tw-uppercase md:tw-ml-8 md:tw-ml-20 tw-font-extrabold tw-text-red-700">
            Nos Actualités
          </h1>
        </div>
      </div>
    </section>


    <div class="container tw-mx-auto tw-flex tw-flex-wrap tw-py-3">
      <!-- Posts Section -->
      <section class="tw-w-full md:tw-w-full tw-flex tw-flex-col tw-items-center tw-px-3">

        <article class="tw-flex tw-flex-col md:tw-flex-row tw-shadow tw-my-4">
          <!-- Article Image -->
          <a href="#" class="hover:tw-opacity-75 tw-basis-1/2">
            <img class="tw-h-full tw-w-full" src="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
          </a>
          <div class="tw-bg-white tw-flex tw-flex-col tw-justify-start tw-p-6">
            <a href="#" class="tw-text-blue-700 tw-text-sm tw-font-bold tw-uppercase tw-pb-4">Technology</a>
            <a href="#" class="tw-text-3xl tw-font-bold hover:tw-text-gray-700 tw-pb-4">LANCEMENT OFFICIEL DU SITE MANGLAM TOUR AND TRAVEL</a>
            <p href="#" class="tw-text-sm tw-pb-3">
              By <a href="#" class="tw-font-semibold hover:tw-text-gray-800">Manglam Tours</a>, Publié le 21 Decembre 2022
            </p>
            <a href="#" class="tw-pb-6 tw-text-black">
              Il vous sera désormais plus facile de faire des réservations en ligne pour vos séjours à l’étranger. En effet, ce mercredi 21 décembre 2022, le site MANGLAM TOUR AND TRAVEL a été officiellement lancé. Un tour dessus, et en quelques clics, vous pouvez réservez des billets d’avion, des chambres d’Hotels et même des voitures. Tout est conçu et mis en œuvre pour vous accompagner du début à la fin de vos séjours.
            </a>
            <a href="#" class="tw-uppercase tw-text-gray-800 hover:tw-text-black">Lire Plus <i
                class="fas fa-arrow-right"></i></a>
          </div>
        </article>


        <article class="tw-flex tw-flex-col md:tw-flex-row tw-shadow tw-my-4">
          <!-- Article Image -->
          <a href="#" class="hover:tw-opacity-75 tw-basis-1/2">
            <img class="tw-h-full tw-w-full" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80">
          </a>
          <div class="tw-bg-white tw-flex tw-flex-col tw-justify-start tw-p-6">
            <a href="#" class="tw-text-blue-700 tw-text-sm tw-font-bold tw-uppercase tw-pb-4">Technology</a>
            <a href="#" class="tw-text-3xl tw-font-bold hover:tw-text-gray-700 tw-pb-4">ATTENTION, NE VOUS FAITES PLUS AVOIR !</a>
            <p href="#" class="tw-text-sm tw-pb-3">
              By <a href="#" class="tw-font-semibold hover:tw-text-gray-800">Manglam Tours</a>, Publié le 21 Decembre 2022
              2020
            </p>
            <a href="#" class="tw-pb-6 tw-text-black">
              Un peu partout sur internet pullulent des faux sites de réservations de billets et de séjours à l’étranger. Ces derniers vous extorquent de l’argent et en retour, ne vous fournissent pas les services demandés. Avec MANGLAM TOUR AND TRAVEL, vous pouvez accéder à plusieurs destinations dans le monde depuis votre salon ou bureau et il n’est pas question de payer quoique ce soit. Faites un tour sur notre site et vous ne serez pas déçus.
            </a>
            <a href="#" class="tw-uppercase tw-text-gray-800 hover:tw-text-black">Lire Plus <i
                class="fas fa-arrow-right"></i></a>
          </div>
        </article>

      </section>

    </div>

   <!--  <div class="tw-relative tw-w-full tw-py-12 tw-px-12">
      <div class="tw-relative tw-z-10 tw-text-center tw-py-12 md:tw-py-24">
        <div
          class="tw-text-white tw-text-center tw-text-3xl md:tw-text-4xl lg:tw-text-5xl xl:tw-text-6xl font-display tw-font-bold tw-mb-6">
          Lorem Ipsum</div>
        <p class="tw-text-white tw-mb-10 tw-text-base md:tw-text-lg tw-font-bold">Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi</p>
        <a href="#"
          class="tw-inline-block tw-b0 tw-text-white tw-uppercase tw-text-sm tw-tracking-widest font-heading tw-px-8 tw-py-4">Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi</a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        class="tw-w-full tw-h-full tw-absolute tw-inset-0 tw-object-cover" />
    </div> -->

  </div>
</template>

<script>
  import {
    Marquee,
    Slide
  } from "vue-marquee-component"

  export default {
    name: 'Tourisme',
    layout: 'master',
    components: {
      [Marquee.name]: Marquee,
      [Slide.name]: Slide,
    },
    data() {
      return {
        villeRules: [
          v => !!v || 'ce champs est obligatoire',
        ],
        dateArriveRules: [
          v => !!v || 'ce champs est obligatoire',
        ],
        dateDepartRules: [
          v => !!v || 'ce champs est obligatoire',
        ],
        hotelReservationForm: {
          destination: "",
          date_arrive: "",
          date_depart: "",
          passengers: {
            adultes: 1,
            enfants: 0,
            bebes: 0,
          }
        },
        items: [
          'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
          'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        ],
      }
    },

    computed: {
      totalPassagers() {
        // cette methode retourne le nombre total de passagers
        return this.hotelReservationForm.passengers.adultes + this.hotelReservationForm.passengers.enfants + this
          .hotelReservationForm.passengers.bebes
      },
      totalChildrens() {
        return this.hotelReservationForm.passengers.adultes * 2
      },
    },

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.$router.push('/filter-hotel')
        }
      },
    }

  }

</script>

<style scoped>

</style>
