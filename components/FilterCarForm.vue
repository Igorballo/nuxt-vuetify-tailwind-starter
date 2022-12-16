<template>
  <div>
    <form class="tw-flex tw-flex-col tw-rounded-lg tw-bg-white tw-p-4 md:tw-p-6 tw-w-full">
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
          ref="heure_debut_ref"
          v-model="heure_debut_menu"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="carReservationForm.heure_debut"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="carReservationForm.heure_debut"
              label="Heure de prise en charge"
              readonly
              v-bind="attrs"
              v-on="on"
              outlined
              class="tw-rounded-l-none"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="heure_debut_menu"
            v-model="carReservationForm.heure_debut"
            full-width
            @click:minute="$refs.heure_debut_ref.save(carReservationForm.heure_debut)"
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
              label="Date de restitution"
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

              <v-select
                :items="highPrice"
                outlined
                label="Plus haut prix"
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip >
                    <span>{{ item }} XOF</span>
                  </v-chip>
                </template>
              </v-select>


                    <v-btn @click="searchCar"
                           class="tw-w-[fit-content] tw-rounded-full tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
                      Rechercher des voitures
                    </v-btn>
                  </form>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      dialog: false,
      heure_debut_menu: false,
      heure_restitution_menu: false,
      date_depart_menu: false,
      heure_debut: false,
      heure_fin: false,
      btnLoading: false,
      carReservationForm: {
        autre_lieu_restitution: false,
        lieu_prise_en_charge: "",
        lieu_de_restitution: "",
        heure_debut: "",
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

  mounted() {
    this.carReservationForm.date_debut = this.selected_recherche_car_date_debut
    this.carReservationForm.date_fin = this.selected_recherche_car_date_fin
    this.carReservationForm.heure_debut = this.selected_recherche_car_heure_debut
    this.carReservationForm.heure_fin = this.selected_recherche_car_heure_fin
    this.carReservationForm.lieu_prise_en_charge = this.selected_recherche_car_lieu_prise_en_charge
    this.carReservationForm.lieu_de_restitution = this.selected_recherche_car_lieu_restitution
    this.carReservationForm.autre_lieu_restitution = this.selected_recherche_car_autre_lieu_restitution
  },

  computed: {
    ...mapGetters('recherche-cars', [
      'selected_recherche_car_date_debut',
      'selected_recherche_car_date_fin',
      'selected_recherche_car_heure_debut',
      'selected_recherche_car_heure_fin',
      'selected_recherche_car_autre_lieu_restitution',
      'selected_recherche_car_lieu_prise_en_charge',
      'selected_recherche_car_lieu_restitution',
    ]),
  },

  methods: {
     searchCar() {
      axios.get('/hotels/get-hotels?pricemin=200&pricemax=10000&limit=4')
        .then(response => {
          console.log(response);
          this.hotels = response.data.hotels;
        })
    },
  }
}
</script>

<style scoped>

</style>
