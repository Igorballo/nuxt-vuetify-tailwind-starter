<template>
  <div>
    <div class="tw-relative">
      <div style="z-index: 500"
           class="tw-flex tw-justify-center tw-items-center tw-absolute tw-inset-0">
        <v-form 
          ref="form"
          v-model="valid"
          lazy-validation
          class="tw-flex tw-flex-col tw-rounded-lg tw-bg-white tw-shadow-md tw-p-4 md:tw-p-6 tw-w-[90%] md:tw-w-[75%]">
          <v-checkbox
            v-model="carReservationForm.autre_lieu_restitution"
            label="Lieu de restitution différent"
          ></v-checkbox>

          <div class="tw-flex tw-items-center tw-gap-6">
            <v-text-field
              label="Lieu de prise en charge"
              outlined
              v-model="carReservationForm.lieu_prise_en_charge"
              :rules="lieuPriseEnChargeRules"
            ></v-text-field>
            <v-text-field
              label="Lieu de restitution"
              outlined
              v-if="carReservationForm.autre_lieu_restitution"
              v-model="carReservationForm.lieu_de_restitution"
              :rules="lieuRestitutionRules"
            ></v-text-field>
          </div>
          <div class="tw-flex tw-items-center tw-gap-6">
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
                      v-model="carReservationForm.date_debut"
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
                    v-model="carReservationForm.date_debut"
                    no-title
                    scrollable
                  >
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col class="tw-px-0">
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
                      :rules="heureDepartRules"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="heure_depart_menu"
                    v-model="carReservationForm.heure_depart"
                    full-width
                    @click:minute="$refs.heure_depart_ref.save(carReservationForm.heure_depart)"
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
                      v-model="carReservationForm.date_fin"
                      label="Date de prise en charge"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      class="tw-rounded-r-none"
                      :rules="dateFinRules"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="carReservationForm.date_fin"
                    no-title
                    scrollable
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
                      :rules="heureFinRules"
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
              </v-col>
            </div>
          </div>

          <v-btn @click="validate"
            class="tw-w-[fit-content] tw-rounded-full tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
            Rechercher des voitures
          </v-btn>
        </v-form>
      </div>
      <v-carousel
        cycle
        height="500"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="i in items.length"
          :src="items[i]"
          :key="i"
        >
        </v-carousel-item>
      </v-carousel>
    </div>


    <!-- Our partners section   -->
    <Partners />

    <Car/>
  </div>
</template>

<script>
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
      items: [
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      ],
      time: null,

      heure_depart_menu: false,
      heure_restitution_menu: false,
      date_depart_menu: false,
      heure_depart: false,
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
    }

  },

  methods: {
     validate () {
        if(this.$refs.form.validate()) {
          this.$router.push('/filter')
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

</style>
