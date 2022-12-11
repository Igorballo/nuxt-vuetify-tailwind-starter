<template>
  <div>
    <div class="h-[75vh] tw-bg-no-repeat tw-bg-cover tw-bg-center"
         style="background-image: url(https://images.unsplash.com/photo-1602019025788-20997a1c2d09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1638&q=80)">
      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="tw-bg-white tw-w-3/5 tw-rounded-lg tw-h-full tw-my-20 tw-p-3 md:tw-p-4 lg:tw-p-12 tw-flex tw-flex-col">
          <span class="tw-inline-flex tw-items-center">
            <v-checkbox
              class="tx-rounded-full"
              v-model="carReservationForm.autre_lieu_restitution"
              label="Lieu de retour différent"
            ></v-checkbox>
          </span>
          <div class="tw-flex tw-flex-col tw-w-full">
            <div class="tw-inline-flex tw-w-full tw-gap-6 tw-items-center">
              <div class=" tw-text-lg tw-rounded-lg tw-w-full tw-flex tw-flex-col tw-p-3">
                <span class="tw-text-gray-600 tw-mb-1 ">Lieu de prise en charge :</span>
                <v-text-field v-model="carReservationForm.lieu_prise_en_charge"
                              :rules="lieuPriseEnChargeRules" required outlined placeholder="Lieu de prise en charge">
                </v-text-field>
              </div>

              <div v-if="carReservationForm.autre_lieu_restitution" class="tw-text-lg tw-rounded-lg tw-w-full tw-flex tw-flex-col tw-p-3">
                <span class="tw-text-gray-600 tw-mb-1 ">Lieu de restitution :</span>
                <v-text-field v-model="carReservationForm.lieu_de_restitution"
                              :rules="LieuRestitutionRules" required outlined placeholder="Lieu de restitution">
                </v-text-field>
              </div>
            </div>


            <datetime format="MM/DD/YYYY" width="300px" v-model="val"></datetime>


            <div class="tw-flex tw-items-center tw-w-full tw-gap-4">
              <div class=" tw-text-lg tw-rounded-lg tw-w-full tw-flex tw-flex-col tw-p-3">
                <span class="tw-text-gray-600 tw-mb-1 ">Date de début :</span>
                <v-menu ref="debut_menu" v-model="debut_menu" :close-on-content-click="false" :return-value.sync="date"
                        transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="carReservationForm.date_debut" placeholder="Date de début: 05/12/2022"
                                  readonly outlined
                                  height="70" v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="carReservationForm.date_debut" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="debut_menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.debut_menu.save(carReservationForm.date_debut)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </div>

              <div class=" tw-text-lg tw-rounded-lg tw-w-full tw-flex tw-flex-col tw-p-3">
                <span class="tw-text-gray-600 tw-mb-1 ">Date de fin :</span>
                <v-menu ref="fin_menu" v-model="fin_menu" :close-on-content-click="false" :return-value.sync="date"
                        transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="carReservationForm.date_fin" placeholder="Date de fin : 05/12/2022" readonly
                                  outlined
                                  height="70" v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="carReservationForm.date_fin" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="fin_menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.fin_menu.save(carReservationForm.date_fin)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
            </div>

            <v-col sm="6">
              <v-textarea rows="3" v-model="carReservationForm.description_voiture"
                          label="Faites une breve description de la voiture que vous voulez" name="input-7-1"
                          outlined></v-textarea>
            </v-col>
          </div>

          <div class="tw-flex tw-mt-6">
            <v-btn dark color="red" @click="reservation()">
              Faire une reservation de voiture
            </v-btn>
          </div>
        </v-form>
      </div>
    </div>

    <!-- Our partners section   -->
    <div class="tw-mx-auto tw-px-4 tw-my-20">
      <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-evenly tw-gap-8">

        <img class="tw-mt-2 tw-h-24 tw-fill-current" src="../assets/img/IATA.png" alt="IATA">

        <img class="tw-mt-2 tw-h-24 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ethiopian_Airlines_Logo.svg/2560px-Ethiopian_Airlines_Logo.svg.png"
             alt="air-france">

        <img class="tw-mt-2 tw-h-24 tw-fill-current"
             src="https://i.pinimg.com/originals/2f/48/a7/2f48a7c799b4995d9578ed9580b40fbe.jpg"
             alt="air-france">

        <img class="tw-mt-2 tw-h-24 tw-fill-current"
             src="https://wallpapercave.com/wp/wp11304533.png"
             alt="air-france">

        <img class="tw-mt-2 tw-h-16 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Airfrance_Logo.svg/2560px-Airfrance_Logo.svg.png"
             alt="air-france">
      </div>
    </div>

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
        date_debut: "",
        date_fin: "",
        description_voiture: ""
      },
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      debut_menu: false,
      fin_menu: false,
    }

  },

  methods: {
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
