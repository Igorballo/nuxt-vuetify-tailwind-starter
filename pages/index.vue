<template>
  <div>
    <div>

      <v-carousel
        show-arrows-on-hover
        v-model="model"
      >
        <v-carousel-item
          class="tw-h-full tw-w-full tw-bg-cover"
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
          <div class="tw-flex tw-flex-wrap tw-justify-center md:tw-items-center tw-gap-2">
            <div @click="$router.push('/reservation-vols')" class="tw-block tw-cursor-pointer tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="ticket"
                src="https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>

                  <div>

                    <dd class="tw-font-bold tw-text-2xl tw-text-red-600">Réservation de Vols</dd>
                  </div>
                </div>

              </div>
            </div>

            <div @click="$router.push('/hotel')" class="tw-block tw-cursor-pointer tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://plus.unsplash.com/premium_photo-1661677878527-052034451487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>

                  <div>

                    <dd class="tw-font-bold tw-text-2xl tw-text-red-600">Hébergements</dd>
                  </div>
                </div>

              </div>
            </div>


            <div @click="$router.push('/car-location')" class="tw-block tw-cursor-pointer tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>

                  <div>

                    <dd class="tw-font-bold tw-text-2xl tw-text-red-600">Location de voitures</dd>
                  </div>
                </div>

              </div>
            </div>

            <div @click="$router.push('/tourisme')" class="tw-cursor-pointer tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>

                  <div>

                    <dd class="tw-font-bold tw-text-2xl tw-text-red-600">Tourisme</dd>
                  </div>
                </div>

              </div>
            </div>


            <div @click="$router.push('/visa-assurance')" class="tw-cursor-pointer tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>

                  <div>

                    <dd class="tw-font-bold tw-text-2xl tw-text-red-600">Visa & Assurance Voyages</dd>
                  </div>
                </div>

              </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
      <Cards/>
  </div>
</template>

<script>
export default {
  name: 'Tourisme',
  layout: 'master',
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
      return this.hotelReservationForm.passengers.adultes + this.hotelReservationForm.passengers.enfants + this.hotelReservationForm.passengers.bebes
    },
    totalChildrens() {
      return this.hotelReservationForm.passengers.adultes * 2
    },
  },

  methods: {
     validate () {
        if(this.$refs.form.validate()) {
          this.$router.push('/filter-hotel')
        }
      },
  }

}

</script>

<style scoped>

</style>
