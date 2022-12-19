<template>
  <div>
    <div>
      <div class="tw-bg-blue-900 tw-opacity-80 tw-p-4 tw-text-white">
        <vue-marquee style="height:20px" :showProgress="false">
          <vue-marquee-slide v-for="i in 10" :key="i">
            <span style="padding: 35px"> Bienvenue à Manglam. on vous souhaite un trés bon voyage</span>
          </vue-marquee-slide>
        </vue-marquee>
      </div>

      <v-carousel
        cycle
        show-arrows-on-hover
        hide-delimiter-background
        height="600"
        v-model="model"
      >
        <v-carousel-item
          class="tw-h-full tw-w-full tw-bg-center tw-bg-cover tw-contain tw-bg-auto"
          src="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

        >
        </v-carousel-item>
        <v-carousel-item
          class="tw-h-full tw-w-full tw-bg-cover"
          src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"

        >
        </v-carousel-item>
        <v-carousel-item
          class="tw-h-full tw-w-full tw-bg-cover"
          src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

        >
        </v-carousel-item>
        <v-carousel-item
          class="tw-h-full tw-w-full tw-bg-cover"
          src="https://cdn.pixabay.com/photo/2019/09/05/15/25/airbus-4454338_960_720.jpg"

        >
        </v-carousel-item>
        <v-carousel-item
          class="tw-h-full tw-w-full tw-bg-cover"
          src="https://images.unsplash.com/photo-1527007622069-3a0241e1cd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"

        >
        </v-carousel-item>
      </v-carousel>
    </div>
    <section class="tw-pt-4 tw-pb-8 lg:tw-pb-10 lg:tw-px-3 tw-flex-col tw-gap-4">
      <div class="">
        <div class="tw-flex tw-flex-col tw-mb-6 tw-px-2 md:tw-px-6 lg:tw-px-10">
          <h1
            class="tw-mt-12 tw-mb-6 tw-text-xl tw-text-center lg:tw-text-3xl tw-font-bold tw-uppercase md:tw-ml-8 md:tw-ml-20 tw-font-extrabold tw-text-red-700">
            Decouvrez nos Services
          </h1>
          <div class="tw-flex tw-justify-center tw-flex-col md:tw-flex-row md:tw-items-center tw-gap-2">
            <div @click="$router.push('/reservation-vols')"
                 class="tw-block tw-cursor-pointer tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="ticket"
                src="https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                    <div class="tw-font-bold tw-text-xl tw-text-red-600">Réservation de Vols</div>
                  <div>
                    <dd class="tw-font-light tw-text-sm tw-mt-3 tw-text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </dd>
                  </div>
              </div>
            </div>

            <div @click="$router.push('/hotel')"
                 class="tw-block tw-cursor-pointer tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://plus.unsplash.com/premium_photo-1661677878527-052034451487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div class="tw-font-bold tw-text-xl tw-text-red-600">Hébergements</div>
                  <div>
                    <dd class="tw-font-light tw-text-sm tw-mt-3 tw-text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </dd>
                  </div>
              </div>
            </div>


            <div @click="$router.push('/car-location')"
                 class="tw-block tw-cursor-pointer tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div class="tw-font-bold tw-text-xl tw-text-red-600">Location de voitures</div>
                  <div>
                    <dd class="tw-font-light tw-text-sm tw-mt-3 tw-text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </dd>
                  </div>
              </div>
            </div>

            <div @click="$router.push('/tourisme')"
                 class="tw-cursor-pointer tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div class="tw-font-bold tw-text-xl tw-text-red-600">Tourisme</div>
                  <div>
                    <dd class="tw-font-light tw-text-sm tw-mt-3 tw-text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </dd>
                  </div>
              </div>
            </div>


            <div @click="$router.push('/visa-assurance')"
                 class="tw-cursor-pointer tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div class="tw-font-bold tw-text-xl tw-text-red-600">Visa & Assurance Voyages</div>
                <div>
                  <dd class="tw-font-light tw-text-sm tw-mt-3 tw-text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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


    <div class="container tw-mx-auto tw-flex tw-flex-wrap tw-py-6">

      <!-- Posts Section -->
      <section class="tw-w-full md:tw-w-full tw-flex tw-flex-col tw-items-center tw-px-3">

        <article class="tw-flex tw-flex-col md:tw-flex-row tw-shadow tw-my-4">
          <!-- Article Image -->
          <a href="#" class="hover:tw-opacity-75">
            <img class="tw-h-full" src="https://source.unsplash.com/collection/1346951/1000x500?sig=1">
          </a>
          <div class="tw-bg-white tw-flex tw-flex-col tw-justify-start tw-p-6">
            <a href="#" class="tw-text-blue-700 tw-text-sm tw-font-bold tw-uppercase tw-pb-4">Technology</a>
            <a href="#" class="tw-text-3xl tw-font-bold hover:tw-text-gray-700 tw-pb-4">Lorem Ipsum Dolor Sit Amet Dolor
              Sit Amet</a>
            <p href="#" class="tw-text-sm tw-pb-3">
              By <a href="#" class="tw-font-semibold hover:tw-text-gray-800">David Grzyb</a>, Published on April 25th,
              2020
            </p>
            <a href="#" class="tw-pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui.
              Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere
              magna..</a>
            <a href="#" class="tw-uppercase tw-text-gray-800 hover:tw-text-black">Continue Reading <i
              class="fas fa-arrow-right"></i></a>
          </div>
        </article>


        <article class="tw-flex tw-flex-col md:tw-flex-row tw-shadow tw-my-4">
          <!-- Article Image -->
          <a href="#" class="hover:tw-opacity-75">
            <img class="tw-h-full" src="https://source.unsplash.com/collection/1346951/1000x500?sig=1">
          </a>
          <div class="tw-bg-white tw-flex tw-flex-col tw-justify-start tw-p-6">
            <a href="#" class="tw-text-blue-700 tw-text-sm tw-font-bold tw-uppercase tw-pb-4">Technology</a>
            <a href="#" class="tw-text-3xl tw-font-bold hover:tw-text-gray-700 tw-pb-4">Lorem Ipsum Dolor Sit Amet Dolor
              Sit Amet</a>
            <p href="#" class="tw-text-sm tw-pb-3">
              By <a href="#" class="tw-font-semibold hover:tw-text-gray-800">David Grzyb</a>, Published on April 25th,
              2020
            </p>
            <a href="#" class="tw-pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui.
              Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere
              magna..</a>
            <a href="#" class="tw-uppercase tw-text-gray-800 hover:tw-text-black">Continue Reading <i
              class="fas fa-arrow-right"></i></a>
          </div>
        </article>

      </section>

    </div>

    <div class="tw-relative tw-w-full tw-py-12 tw-px-12">
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
        class="tw-w-full tw-h-full tw-absolute tw-inset-0 tw-object-cover"/>
    </div>

      <v-row justify="center">
        <v-btn
          color="primary"
          dark
          @click.stop="dialog = true"
        >
          Open Dialog
        </v-btn>

        <v-dialog
          v-model="dialog"
          max-width="290"
        >
          <v-card>
            <v-card-title class="text-h5">
              Use Google's location service?
            </v-card-title>

            <v-card-text>
              Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >
                Disagree
              </v-btn>

              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
  </div>
</template>

<script>
import {Marquee, Slide} from "vue-marquee-component"

export default {
  name: 'Tourisme',
  layout: 'master',
  components: {
    [Marquee.name]: Marquee,
    [Slide.name]: Slide,
  },
  data() {
    return {
      dialog: false,
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
      return this.hotelReservationForm.passengers.adultes + this.hotelReservationForm.passengers.enfants + this.hotelReservationForm.passengers.bebes
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
