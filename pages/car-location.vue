<template>
  <div>
    <Annonce />
    <div class="tw-relative">
      <div style="z-index: 200"
           class="tw-flex tw-justify-center tw-items-center tw-absolute tw-inset-0">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="tw-flex tw-flex-col tw-rounded-lg tw-bg-white tw-shadow-md tw-px-2 tw-py-4 md:tw-p-6 tw-w-[90%] md:tw-w-[75%]">
          <v-checkbox
            v-model="carFilterForm.autre_lieu_restitution"
            label="Lieu de restitution différent"
          ></v-checkbox>

          <div class="tw-flex tw-flex-col md:tw-gap-6 tw-pt-2 md:tw-flex-row md:tw-items-center md:tw-justify-between ">
            <v-text-field
              label="Lieu de prise en charge"
              outlined
              v-model="carFilterForm.lieu_prise_en_charge"
              :rules="lieuPriseEnChargeRules"
            ></v-text-field>
            <v-text-field
              label="Lieu de restitution"
              outlined
              v-if="carFilterForm.autre_lieu_restitution"
              v-model="carFilterForm.lieu_de_restitution"
              :rules="lieuRestitutionRules"
            ></v-text-field>
          </div>
          <div class="tw-flex tw-flex-col tw-pt-2 md:tw-flex-row md:tw-gap-6 md:tw-items-center md:tw-justify-between ">
            <div class="tw-flex  tw-w-full">
              <v-col class="tw-px-0">
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
                      v-model="carFilterForm.date_debut"
                      label="Date de prise en charge"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      class="tw-rounded-r-none"
                      :rules="dateDepartRules"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="carFilterForm.date_debut"
                    no-title
                    scrollable
                    :allowed-dates="disablePastDates"
                  >
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col class="tw-px-0">
                <v-menu
                  ref="heure_debut_ref"
                  v-model="heure_debut_menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="carFilterForm.heure_debut"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="carFilterForm.heure_debut"
                      label="Heure de prise en charge"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                      class="tw-rounded-l-none"
                      :rules="heureDepartRules"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="heure_debut_menu"
                    v-model="carFilterForm.heure_debut"
                    full-width
                    @click:minute="$refs.heure_debut_ref.save(carFilterForm.heure_debut)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </div>
            <div class="tw-flex tw-w-full">
              <v-col class="tw-px-0">
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
                      v-model="carFilterForm.date_fin"
                      label="Date de restitution"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      class="tw-rounded-r-none"
                      :rules="dateFinRules"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="carFilterForm.date_fin"
                    no-title
                    scrollable
                    :allowed-dates="disablePastDates"
                  >
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col class="tw-px-0">
                <v-menu
                  ref="restitution_heure_ref"
                  v-model="heure_restitution_menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync=carFilterForm.heure_fin
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="carFilterForm.heure_fin"
                      label="Heure de restitution"
                      class="tw-rounded-l-none"
                      :rules="heureFinRules"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="heure_restitution_menu"
                    v-model="carFilterForm.heure_fin"
                    full-width
                    @click:minute="$refs.restitution_heure_ref.save(carFilterForm.heure_fin)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </div>
          </div>

          <v-btn @click="carSearch()"
                 class="tw-w-[fit-content] tw-rounded-full tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
            Rechercher des voitures
          </v-btn>
        </v-form>
      </div>
      <v-carousel
        cycle
        height="600"
        :height="carFilterForm.autre_lieu_restitution ? '600': '600'"
        hide-delimiter-background
        show-arrows-on-hover
      >
          <v-carousel-item
            src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80">
        </v-carousel-item>
        <v-carousel-item
          src="https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
        </v-carousel-item>
        <v-carousel-item
              src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80">
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- Our partners section   -->
    <Partners/>

    <section class="tw-pb-8 tw-px-4 tw-bg-white tw-flex-col tw-gap-4 tw-shadow-lg">
      <h1
        class="tw-mt-12 tw-mb-6 tw-text-xl lg:tw-px-20 md:tw-text-2xl tw-inline-flex tw-items-center tw-gap-3 tw-font-bold tw-uppercase tw-font-extrabold tw-text-red-700">
        Meilleures Offres en ce moment
      </h1>

      <div class="tw-px-2 lg:tw-px-20 tw-gap-8 tw-flex tw-flex-col">
        <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-items-center tw-gap-4">
          <div v-for="car in cars"
            class="tw-justify-start tw-w-full md:tw-w-1/4 tw-pb-4 tw-cursor-pointer hover:tw-bg-gray-200 tw-shadow-lg tw-rounded-lg tw-h-full">
            <div :style="{backgroundImage: `url(${showImages(car)})`}" class="tw-h-96 tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"></div>
            <h1 class="tw-text-2xl tw-font-bold tw-px-4 tw-py-2 tw-text-black tw-uppercase">{{ car.marque}} - {{ car.nom}}</h1>
            <p class="tw-truncate-line-4 tw-text-sm md:tw-text-base tw-px-4 tw-pt-2 tw-italic">
              {{ car.description }}
            </p>
            <span class="tw-text-sm lg:tw-text-lg tw-inline-flex tw-items-center tw-gap-3 tw-font-bold tw-px-4 tw-italic ">
              <img class="tw-h-10 tw-w-10" src="../assets/svg/car1.svg"> À partir de {{ car.prix }} XOF par jour
            </span>

            <v-btn @click="$router.push('/filter-car')" color="red darken-1" class="tw-ml-4 tw-text-white">Reservez maintenant</v-btn>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import config from "../config";

export default {
  name: 'car-location',
  layout: 'master',

  data() {
    return {
      lieuPriseEnChargeRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      lieuRestitutionRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      heureDepartRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      dateDepartRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      dateFinRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      heureFinRules: [
        v => !!v || 'ce champs est obligatoire',
      ],

      time: null,
      cars: [],
      heure_debut_menu: false,
      heure_restitution_menu: false,
      date_depart_menu: false,
      heure_debut: false,
      heure_fin: false,
      modal: "",
      lieuPriseEnChargeRules: [
        v => !!v || 'Lieu de prise en charge est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
      LieuRestitutionRules: [
        v => !!v || 'Lieu de restitution est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
      valid: true,
      btnLoading: false,
      carFilterForm: {
        autre_lieu_restitution: false,
        lieu_prise_en_charge: "",
        lieu_de_restitution: "",
        heure_debut: "",
        heure_fin: "",
        date_debut: "",
        date_fin: "",
      },
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }

  },

  mounted(){
    this.getCar()
  },

  methods: {
    showImages(item) {
      const url = config.app_local ? `${config.app_back_debug_url}/${item.images[0]}` : `${config.app_back_url}/${item.images[0]}`
      return url
    },
    async getCar() {
      await axios.get('/cars/get-cars?limit=4')
        .then(response => {
          console.log(response);
          this.cars = response.data.cars;
        })
    },
    disablePastDates(val) {
      return val > new Date().toISOString().substr(0, 10)
    },
    carSearch() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('recherche-cars/setRechercheCarDateDebut', this.carFilterForm.date_debut)
        this.$store.dispatch('recherche-cars/setRechercheCarDateFin', this.carFilterForm.date_fin)
        this.$store.dispatch('recherche-cars/setRechercheCarHeureDebut', this.carFilterForm.heure_debut)
        this.$store.dispatch('recherche-cars/setRechercheCarHeureFin', this.carFilterForm.heure_fin)
        this.$store.dispatch('recherche-cars/setRechercheCarLieuPriseEnCharge', this.carFilterForm.lieu_prise_en_charge)
        this.$store.dispatch('recherche-cars/setRechercheCarLieuRestitution', this.carFilterForm.lieu_de_restitution)
        this.$store.dispatch('recherche-cars/setRechercheCarAutreLieuRestitution', this.carFilterForm.autre_lieu_restitution)

        this.$router.push('/filter-car')
      }
    },

    async reservation() {
      this.btnLoading = true
      this.$refs.form.validate()
      await axios.post('', this.form).then((response) => {
        if (response.data.error) {
          Swal.fire({
            title: 'Echec',
            text: 'Une Erreur s\'est produite',
            icon: 'error'
          })
          return
        }
        this.btnLoading = false
        this.showToast('success', 'Demande de reservation envoyée avec succès')
      }).catch(error => {
        this.btnLoading = false
        this.showToast('error', "Une erreur s'est produite")
      });
    }
  },
}

</script>

<style scoped>
.tw-truncate-line-4 {
  /* Other styles */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
</style>
