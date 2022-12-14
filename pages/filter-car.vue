<template>
  <div class="tw-bg-gray-200 tw-p-4 md:tw-py-12">
    <div class="tw-relative tw-container tw-mx-auto md:tw-px-4 md:tw-flex md:tw-gap-8 tw-w-full">
      <div class="tw-hidden md:tw-sticky md:tw-top-24 lg:tw-block tw-w-1/3 tw-h-screen">
        <form class="tw-flex tw-flex-col tw-rounded-lg tw-bg-white tw-shadow-md tw-p-4 md:tw-p-6 tw-w-full">
          <v-text-field
            label="Lieu de prise en charge"
            outlined
            v-model="carReservationForm.lieu_prise_en_charge"
          ></v-text-field>

          <div class="tw-flex tw-items-center">
            <v-menu
              ref="depart_menu"
              v-model="depart_menu"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="carReservationForm.date_debut"
                  label="Date de prise en charge"
                  readonly
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  class="tw-rounded-r-none"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="carReservationForm.date_debut"
                no-title
                scrollable
              >
              </v-date-picker>
            </v-menu>

            <v-menu
              ref="heure_depart_ref"
              v-model="heure_depart_menu"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="carReservationForm.heure_depart"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="carReservationForm.heure_depart"
                  label="Heure de prise en charge"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  class="tw-rounded-l-none"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="heure_depart_menu"
                v-model="carReservationForm.heure_depart"
                full-width
                @click:minute="$refs.heure_depart_ref.save(carReservationForm.heure_depart)"
              ></v-time-picker>
            </v-menu>
          </div>

          <v-checkbox
            v-model="carReservationForm.autre_lieu_restitution"
            label="Lieu de restitution différent"
          ></v-checkbox>

          <v-text-field
            label="Lieu de restitution"
            outlined
            v-if="carReservationForm.autre_lieu_restitution"
            v-model="carReservationForm.lieu_de_restitution"
          ></v-text-field>

          <div class="tw-flex tw-w-full">
            <v-menu
              ref="date_destination_ref"
              v-model="date_depart_menu"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="carReservationForm.date_fin"
                  label="Date de prise en charge"
                  readonly
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  class="tw-rounded-r-none"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="carReservationForm.date_fin"
                no-title
                scrollable
              >
              </v-date-picker>
            </v-menu>
            <v-menu
              ref="restitution_heure_ref"
              v-model="heure_restitution_menu"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync=carReservationForm.heure_fin
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="carReservationForm.heure_fin"
                  label="Heure de restitution"
                  class="tw-rounded-l-none"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="heure_restitution_menu"
                v-model="carReservationForm.heure_fin"
                full-width
                @click:minute="$refs.restitution_heure_ref.save(carReservationForm.heure_fin)"
              ></v-time-picker>
            </v-menu>
          </div>

          <v-btn @click="$router.push('/filter')"
                 class="tw-w-[fit-content] tw-rounded-full tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
            Rechercher des voitures
          </v-btn>
        </form>
      </div>

      <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-gap-8">
        <div v-for="i in 4" class="tw-bg-blue-800 tw-pt-8 tw-p-2 tw-rounded-lg tw-w-full">
          <div class="tw-bg-white tw-px-4">
            <div class="tw-text-xl tw-font-semibold tw-py-3 tw-border-b">Minivan 7 places | <span class="tw-font-light">ou son équivalent</span>
            </div>
            <div class="tw-py-4 tw-flex tw-flex-wrap md:tw-flex-nowrap tw-gap-4 md:tw-gap-12 tw-text-sm">
              <div class="tw-flex tw-flex-col tw-gap-2 md:tw-gap-6 tw-w-full">
                <img class="tw-h-44 tw-w-full md:tw-w-64"
                     src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                     alt="voiture">
                <div class="tw-flex tw-justify-between tw-font-semibold">
                  <div title="Peut prendre 7 personnes au total"
                       class="tw-inline-flex tw-justify-center tw-items-center tw-border-r-2 tw-gap-2 tw-w-1/3">
                    <span class="">7</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="tw-w-5 tw-h-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                    </svg>
                  </div>
                  <div title="Peut prendre 3 valises au total"
                       class="tw-inline-flex tw-justify-center tw-items-center tw-border-r-2 tw-gap-2 tw-w-1/3">
                    <span class="">2</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="tw-w-5 tw-h-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                    </svg>
                  </div>
                  <div title="4 portes"
                       class="tw-inline-flex tw-justify-center tw-items-center tw-border-r-2 tw-gap-2 tw-w-1/3">
                    <span class="">4</span>

                    <img class="tw-h-5 tw-w-5" src="../assets/svg/door.svg" alt="car-door">
                  </div>

                </div>
                <div class="tw-flex tw-flex-col tw-gap-4">
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-4 tw-w-4" src="../assets/svg/right.svg">
                    <span>Voiture automatique</span>
                  </div>
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-4 tw-w-4" src="../assets/svg/right.svg">
                    <span>Voiture climatisée</span>
                  </div>
                </div>
              </div>
              <div class="tw-flex tw-flex-col tw-w-full tw-text-sm">
                <div class="tw-inline-flex tw-gap-4 tw-items-start">
                  <v-icon>mdi-airplane</v-icon>
                  <span>Lieu De Prise En Charge : <br> <p class="tw-font-semibold">Au Terminal</p> </span>
                </div>
                <div class="tw-inline-flex tw-gap-4 tw-items-start">
                  <v-icon>mdi-gas-station-outline</v-icon>
                  <span>Politique En Matière De Carburant : <br> <p class="tw-font-semibold">Quart au quart</p> </span>
                </div>
                <div class="tw-inline-flex tw-gap-4 tw-items-start">
                  <v-icon>mdi-speedometer</v-icon>
                  <span>Killométrage : <br> <p class="tw-font-semibold">Illimité</p> </span>
                </div>
              </div>
              <div class="tw-gap-4 md:tw-gap-8 tw-flex tw-flex-col">
                <div class="tw-flex tw-flex-col tw-gap-4">
                  <div class="tw-inline-flex tw-gap-2">
                    <img class="tw-h-4 tw-w-4" src="../assets/svg/right.svg">
                    <span class="">Assurance dommage en cas de collision</span>
                  </div>
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-4 tw-w-4" src="../assets/svg/right.svg">
                    <span>Assurance vol</span>
                  </div>
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-4 tw-w-4" src="../assets/svg/right.svg">
                    <span>Annulation gratuite</span>
                  </div>
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-4 tw-w-4" src="../assets/svg/right.svg">
                    <span>Modifications gratuites</span>
                  </div>
                </div>

                <div class="tw-flex tw-flex-col tw-gap-4">
                  <div class="tw-text-lg"><span class="tw-text-2xl tw-font-extrabold">6500 XOF/JOUR</span> <br> Pour 8
                    jours
                  </div>
                  <button
                    class="tw-py-3 tw-px-12 tw-text-white tw-text-xl tw-font-semibold tw-rounded-lg tw-bg-red-600">
                    Reservez
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'master',
  data() {
    return {
      countries: [],
      heure_depart_menu: false,
      heure_restitution_menu: false,
      date_depart_menu: false,
      heure_depart: false,
      heure_fin: false,
      btnLoading: false,
      carReservationForm: {
        autre_lieu_restitution: false,
        lieu_prise_en_charge: "",
        lieu_de_restitution: "",
        heure_depart: "",
        heure_fin: "",
        date_debut: "",
        date_fin: "",
      },
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      lowPrice: ['0', '2000', '5000', '10000', '25000', '50000'],
      highPrice: ['2000', '5000', '10000', '25000', '+ 50000'],
      value: ['foo', 'bar', 'fizz'],
    }
  },

}
</script>

<style scoped>

</style>
