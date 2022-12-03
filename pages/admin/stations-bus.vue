<template>
  <div>
    <v-row class="mx-4 mt-4 fill-height">
      <v-card elevation="2" width="100%">
        <v-card-title class="tw-mb-6">
          <h1 class="text-h4 text-dark">Liste des stations</h1>
          <v-spacer/>

          <v-row justify="end">
            <v-dialog
              v-model="dialog"
              max-width="800px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn @click="isEditing = false" large v-bind="attrs" v-on="on" color="accent" class="tw-py-2 tw-rounded-full">
                  <v-icon size="25" color="white">
                    mdi-calendar
                  </v-icon>
                  <v-spacer/>
                  <span class="mx-2">Nouvelle station</span>
                </v-btn>
              </template>

              <v-card>
                <v-form

                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-card-title>
                    <span class="text-h5">{{ form_title }}</span>
                  </v-card-title>
                  <v-card-text>

                    <v-alert v-if="errorMessage.length > 0">{{ errorMessage }}</v-alert>
                    <v-card>
                      <v-card-title>Informations de la station</v-card-title>
                      <v-card-text>
                        <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          dense
                          outlined
                          v-model="station.nom"
                          label="Raison sociale*"
                          required
                          :rules="raisonSocialRules"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          dense
                          outlined
                          v-model="station.nif"
                          label="NIF"
                          required
                          :rules="nifRules"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" >
                        <v-text-field
                          dense
                          v-model="station.email"
                          outlined
                          label="Email*"
                          type="email"
                          required
                          :rules="emailRules"
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          dense
                          v-model="station.rccm"
                          outlined
                          label="RCCM*"
                          required
                          :rules="rccmRules"
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          dense
                          v-model="station.adresse"
                          outlined
                          label="Adresse*"
                          hint="Situation géographique de l'entreprise"
                          persistent-hint
                          required
                          :rules="adresseRules"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" >
                        <vue-phone-number-input
                          v-model="station.telephone"
                          color="gray"
                          :border-radius="0"
                          :preferred-countries="['TG', 'FR']"
                          :only-countries="['TG', 'FR']"
                          default-country-code="TG"
                          show-code-on-list
                          clearable
                          :translations="{
                          countrySelectorLabel: 'Code pays',
                          countrySelectorError: 'Choisir un pays',
                          phoneNumberLabel: 'Numéro de téléphone',
                          example: 'Exemple :'
                          }"
                          @update="getphoneresult($event)"
                          required
                          :rules="telephoneRules"
                        />
                      </v-col>

                      <v-col cols="12">
                        <v-autocomplete
                          v-model="station.ville_id"
                          :items="villes"
                          item-text="nom"
                          item-value="id"
                          outlined
                          required
                          :rules="[v => !!v || 'La ville est requise']"
                          label="Ville du siège"
                        ></v-autocomplete>
                      </v-col>

                      <v-col cols="12" sm="12">
                        <v-textarea
                          cols="12"
                          v-model="station.description"
                          outlined
                          name="input-7-4"
                          label="Description de l'entreprise"
                          value=""
                          :rules="descriptionRules"
                        ></v-textarea>
                      </v-col>


                    </v-row>
                      </v-card-text>
                    </v-card>

                    <v-card class="tw-mt-8">
                      <v-card-title>Informations de l'administrateur </v-card-title>
                      <v-card-text>
                        <v-row>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              dense
                              outlined
                              v-model="station.admin_nom"
                              label="Nom de l'administrateur*"
                              required
                              :rules="nomRules"
                            ></v-text-field>
                          </v-col>

                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              dense
                              outlined
                              v-model="station.admin_prenom"
                              label="Prénom de l'administrateur*"
                              required
                              :rules="prenomRules"
                            ></v-text-field>
                          </v-col>

                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              dense
                              outlined
                              v-model="station.admin_email"
                              label="Email de l'administrateur*"
                              type="email"
                              hint="Sera utiliser pour se connecter"
                              :rules="emailRules"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" >
                            <vue-phone-number-input
                              v-model="station.admin_telephone"
                              color="gray"
                              :border-radius="0"
                              :preferred-countries="['TG', 'FR']"
                              :only-countries="['TG', 'FR']"
                              default-country-code="TG"
                              show-code-on-list
                              clearable
                              :translations="{
                               countrySelectorLabel: 'Code pays',
                               countrySelectorError: 'Choisir un pays',
                               phoneNumberLabel: 'Numéro de téléphone',
                               example: 'Exemple :'
                              }"
                              :rules="telephoneRules"
                              @update="getadminphoneresult($event)"
                            />
                          </v-col>


                        </v-row>

                      </v-card-text>
                    </v-card>

                    <v-card class="tw-mt-8">
                      <v-card-title>Informations du propriétaire </v-card-title>
                      <v-card-text>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field dense outlined v-model="station.prop_nom" label="Nom du propriétaire*" required
                              :rules="nomRules"></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6">
                            <v-text-field dense outlined v-model="station.prop_prenom" label="Prénom du propriétaire*" required
                              :rules="prenomRules"></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6">
                            <v-text-field dense outlined v-model="station.prop_email" label="Email du propriétaire*" type="email"
                              hint="Sera utiliser pour se connecter" :rules="emailRules"></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6">
                            <vue-phone-number-input v-model="station.prop_phone" color="gray" :border-radius="0"
                              :preferred-countries="['TG', 'FR']" :only-countries="['TG', 'FR']" default-country-code="TG" show-code-on-list
                              clearable :translations="{
                               countrySelectorLabel: 'Code pays',
                               countrySelectorError: 'Choisir un pays',
                               phoneNumberLabel: 'Numéro de téléphone',
                               example: 'Exemple :'
                              }" :rules="telephoneRules" @update="getpropphoneresult($event)" />
                          </v-col>


                        </v-row>

                      </v-card-text>
                    </v-card>
                </v-card-text>
                </v-form>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="tw-bg-yellow-500 tw-text-white tw-font-medium tw-text-base"
                    text
                    @click="dialog = false"
                  >
                    Annuler
                  </v-btn>
                  <v-btn v-if="!isEditing"
                    class="tw-bg-green-800 tw-text-white tw-font-medium tw-text-base"
                    text :loading="btnLoading"
                    @click="saveStationBus()"
                  >
                    Enrégistrer
                  </v-btn>
                  <v-btn v-if="isEditing"
                    class="tw-bg-green-800 tw-text-white tw-font-medium tw-text-base"
                    text :loading = "btnLoading"
                    @click="updateStation()"
                  >
                    Appliquer les modifications
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-data-table
            no-data-text="Aucune station de bus retrouvée"
            loading-text="Chargement"
            :footer-props="{
              'items-per-page-text':'Stations par page'
            }"
            dense
            :loading="isLoading"
            :headers="headers"
            :items="stationsBus"
            item-key="name"
            class="elevation-1"
          >
            <template v-slot:item.image="{ item }">
              <v-avatar
                height="50"
                width="50">
                <v-img
                  lazy-src="item.photo"
                  max-height="150"
                  max-width="250"
                  :src="item.photo"
                ></v-img>
              </v-avatar>
            </template>


            <template v-slot:item.actions="{ item }">
              <div class="">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="$router.push('/admin/parametrages/'+ item.id + '/settings')"
                      class="ma-2"
                      outlined
                      small
                      fab
                      color="teal"
                    >
                      <v-icon>mdi-cog-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Paramètres</span>
                </v-tooltip>

                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="handleEditStation(item)"
                      class="ma-2"
                      outlined
                      small
                      fab
                      color="indigo"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span>Editer</span>
                </v-tooltip>

                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="deleteStation(item)"
                      class="ma-2"
                      outlined
                      small
                      fab
                      color="red"
                    >
                      <v-icon>mdi-delete-empty</v-icon>

                    </v-btn>
                  </template>
                  <span>Supprimer</span>
                </v-tooltip>
              </div>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "services",
  layout: 'admin',
  data: () => ({
    dialog: false,
    errors: [],
    stationsBus: [],
    villes: [],
    phone: null,
    admin_phone: null,
    // prop_phone: null,
    isLoading: false,
    btnLoading: false,
    isEditing: false,
    errorMessage: "",
    station: {
      nom: "",
      nif: "",
      rccm: "",
      email: "",
      adresse: "",
      description: "",
      telephone: "",
      admin_nom: "",
      admin_email: "",
      admin_prenom: "",
      prop_nom: "",
      prop_email: "",
      prop_prenom: "",
      prop_phone: "",
      admin_telephone: "",
      ville_id: null
    },
    valid: true,
    raisonSocialRules: [
      v => !!v || 'La raison sociale est requise',
      v => (v && v.length >= 2) || 'La raison social doit contenir au moins 2 charactères',
    ],
    nomRules: [
      v => !!v || 'Le nom est requis',
      v => (v && v.length >= 2) || 'Le nom doit contenir au moins 2 charactères',
    ],
    prenomRules: [
      v => !!v || 'Le prénom est requis',
      v => (v && v.length >= 2) || 'Le prénom doit contenir au moins 2 charactères',
    ],
    emailRules: [
      v => !!v || "L'e-mail est requis",
      v => /.+@.+\..+/.test(v) || 'E-mail invalide',
    ],
    descriptionRules: [
      v => !!v || "La description est requise",
      v => (v && v.length >= 5) || 'La description doit contenir au moins 5 charactères',
    ],
    nifRules: [
      v => !!v || "Le NIF est requis",
      v => (v && v.length >= 8) || 'La description doit contenir au moins 8 charactères',
    ],
    rccmRules: [
      v => !!v || "Le RCCM est requis",
    ],
    telephoneRules: [
      v => !!v || "Le numéro de télephone est requis",
    ],
    adresseRules: [
      v => !!v || "L'adresse de la station est requise",
    ],
    headers: [
      {
        text: 'Image',
        align: 'start',
        sortable: false,
        value: 'image',
      },
      {
        text: 'Raison sociale',
        align: 'start',
        sortable: false,
        value: 'nom',
      },
      {
        text: 'Email',
        align: 'start',
        sortable: false,
        value: 'email',
      },

      {text: 'N° Telephone', sortable: false, value: 'telephone'},

      {text: 'Actions', value: 'actions'},
    ],
  }),

  mounted() {
    this.getBusStations();
    this.getVilles();
  },

  computed: {
    form_title: function() {
      if(this.isEditing)
        return "Modification de station"
      return "Nouvelle station de bus"
    }
  },

  methods: {
    async getBusStations() {
      this.isLoading = true
      await axios.get('/admin/bus-stations').then(response => {
        if(response.data.error){
          for(const mess in response.data.messages){
            this.errorMessage+= mess + "\n"
          }
        }
        this.stationsBus = response.data.stations
        this.isLoading = false
      }).catch(error => {
        this.btnLoading = false
        console.log(error)
        this.showToast('error', "Une erreur s'est produite")

      });
    },
    async getVilles() {
      await axios.get('/villes').then(response => {
        this.villes = response.data.villes
      }).catch(error => {
        this.showToast('error', "Une erreur s'est produite")
        this.isLoading = false
      });
    },

    async saveStationBus() {
      // save station here
      if(this.$refs.form.validate()){
        this.btnLoading = true
        await axios.post('/admin/bus-stations', this.station).then((response) => {
          if (response.data.error) {
            Swal.fire({
              title: 'Echec',
              text: 'Une Erreur s\'est produite',
              icon: 'error'
            })
            return
          }
          this.btnLoading = false
          this.stationsBus = response.data.stations
          this.dialog = false,

            this.showToast('success', 'Station créee avec succès')
        }).catch(error => {
          this.btnLoading = false
          this.showToast('error', "Une erreur s'est produite")
        });

      }
        return


    },

    async deleteStation(item) {
      Swal.fire({
        icon: 'question',
        title: "Attention!",
        text: "Voulez-vous vraiment supprimer cette station ?",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "annuler",
        preConfirm: async () => {
          Swal.showLoading()
          await axios.delete('/admin/delete-bus-station/' + item.id)
            .then(response => {
              this.stationsBus = response.data.stations
              this.showToast('success', 'Station supprimée avec succès')
            })
            .catch(error => {
              this.showToast('error', 'Une erreur s\'est produite')
            })
          Swal.hideLoading()
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
    },

    handleEditStation(station){
      this.isEditing = true
      this.station = station
      this.dialog = true
      this.phone = station.telephone
    },

    async updateStation(){
      this.btnLoading = true
      await axios.post('/admin/update-bus-station/' + this.station.id, this.station).then((response) => {
        if (response.data.error) {
          Swal.fire({
            title: 'Echec',
            text: 'Une Erreur s\'est produite',
            icon: 'error'
          })
          return
        }
        this.stationsBus = response.data.stations
        this.btnLoading = false
        this.dialog = false,
          this.showToast('success', 'Station modifiée avec succès')
      }).catch(error => {
        this.showToast('error', "Une erreur s'est produite")
      });
    },

    getphoneresult ($event) {
      this.station.telephone = $event.formattedNumber
    },

    getadminphoneresult ($event) {
      this.station.admin_telephone = $event.formattedNumber
    },

    getpropphoneresult($event) {
      this.station.prop_phone = $event.formattedNumber
    }

  }
}

</script>

<style scoped>

</style>
