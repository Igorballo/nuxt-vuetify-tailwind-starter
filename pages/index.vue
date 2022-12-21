<template>
  <div>
    <div>
      <Annonce />
      <v-carousel
        cycle
        show-arrows-on-hover
        hide-delimiter-background
        height="600"
        v-model="model"
      >
        <v-carousel-item
          class="tw-h-full tw-w-full tw-bg-center tw-bg-cover tw-center tw-bg-auto"
          src="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        >
          <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full">
            <div class="tw-mx-6 md:tw-mx-0 tw-w-full md:tw-w-2/3 tw-text-center tw-bg-gray-800 tw-bg-opacity-50 tw-p-8 tw-rounded-lg">
              <h1 class="tw-text-3xl md:tw-text-4xl tw-text-white tw-font-extrabold">Lorem ipsum dolor sit amet <br class="tw-hidden md:tw-block"> consectetur adipisicing elit</h1>
              <p class="tw-mt-8 tw-text-sm md:tw-text-base tw-text-gray-100">Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
            </div>
          </div>

        </v-carousel-item>
        <v-carousel-item
          class="tw-h-full tw-w-full tw-bg-cover"
          src="https://images.unsplash.com/photo-1660896592505-d77826b40a2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        >
          <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full">
            <div class="tw-mx-6 md:tw-mx-0 tw-w-full md:tw-w-2/3 tw-text-center tw-bg-gray-800 tw-bg-opacity-50 tw-p-8 tw-rounded-lg">
              <h1 class="tw-text-3xl md:tw-text-4xl tw-text-white tw-font-extrabold">Lorem ipsum dolor sit amet <br class="tw-hidden md:tw-block"> consectetur adipisicing elit</h1>
              <p class="tw-mt-8 tw-text-sm md:tw-text-base tw-text-gray-100">Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="tw-h-full tw-w-full tw-bg-cover"
          src="https://images.unsplash.com/photo-1561121864-3e4031788fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
          <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full">
            <div class="tw-mx-6 md:tw-mx-0 tw-w-full md:tw-w-2/3 tw-text-center tw-bg-gray-800 tw-bg-opacity-50 tw-p-8 tw-rounded-lg">
              <h1 class="tw-text-3xl md:tw-text-4xl tw-text-white tw-font-extrabold">Lorem ipsum dolor sit amet <br class="tw-hidden md:tw-block"> consectetur adipisicing elit</h1>
              <p class="tw-mt-8 tw-text-sm md:tw-text-base tw-text-gray-100">Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="tw-h-full tw-w-full tw-bg-cover"
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
          <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full">
            <div class="tw-mx-6 md:tw-mx-0 tw-w-full md:tw-w-2/3 tw-text-center tw-bg-gray-800 tw-bg-opacity-50 tw-p-8 tw-rounded-lg">
              <h1 class="tw-text-3xl md:tw-text-4xl tw-text-white tw-font-extrabold">Lorem ipsum dolor sit amet <br class="tw-hidden md:tw-block"> consectetur adipisicing elit</h1>
              <p class="tw-mt-8 tw-text-sm md:tw-text-base tw-text-gray-100">Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
            </div>
          </div>
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
            <img class="tw-h-96 lg:tw-h-full tw-w-full" src="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
          </a>
          <div class="tw-bg-white tw-flex tw-flex-col tw-justify-start tw-p-6">
            <a href="#" class="tw-text-blue-700 tw-text-sm tw-font-bold tw-uppercase tw-pb-4">Nouveauté</a>
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
            <img class="tw-h-96  lg:tw-h-full tw-w-full" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80">
          </a>
          <div class="tw-bg-white tw-flex tw-flex-col tw-justify-start tw-p-6">
            <a href="#" class="tw-text-blue-700 tw-text-sm tw-font-bold tw-uppercase tw-pb-4">Manglam Alerte</a>
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
