<template>
  <v-app>
    <div class="">
      <div class="tw-mx-auto tw-sticky tw-py-4 tw-top-0 tw-z-50 tw-bg-white">
        <div
          class="tw-flex lg:tw-flex-row tw-items-center tw-justify-between lg:px-desktop tw-mx-4 lg:tw-mx-12 tw-sticky tw-top-0">
          <!-- Header logo -->
          <div class="tw-flex tw-justify-end tw-bg-white tw-rounded-r-full">
            <h1 class="tw-font-bold tw-text-2xl">
              <nuxt-link to="/"><img class="tw-h-20 tw-w-52" src="../assets/img/CPA-LOGO1.jpg" alt=""></nuxt-link>
            </h1>
          </div>
          <ul class="tw-items-center tw-space-x-14 tw-hidden lg:tw-flex">
            <li class="tw-space-x-8 tw-font-medium tw-text-md">
              <NuxtLink class="tw-text-green-600 tw-border-b tw-border-green-600" to="/">Accueil</NuxtLink>
              <NuxtLink class="tw-text-green-600" to="/service">Nos services</NuxtLink>
              <NuxtLink class="tw-text-green-600" to="/service">Sociétés</NuxtLink>
              <NuxtLink class="tw-text-green-600" to="/start-up">Les Startups</NuxtLink>
              <NuxtLink class="tw-text-green-600" to="/top-entreprise">Top 10</NuxtLink>
            </li>
          </ul>
          <div class="tw-font-serif tw-gap-8 tw-hidden lg:tw-inline-flex">
            <button
              class="tw-font-medium tw-text-amber-500 tw-text-lg tw-py-3 tw-border tw-border-blue-500 hover:tw-border-blue-600 tw-rounded"
              @click="showLoginForm = true">Connexion
            </button>

            <button
              class="tw-text-white tw-text-lg tw-px-6 tw-rounded-md tw-bg-amber-500 tw-font-medium hover:tw-bg-amber-600 hover:tw-text-white tw-transition-all"
              @click="showRegisterForm = true">Inscription
            </button>
          </div>

          <v-icon color="blue" class="lg:tw-hidden">mdi-menu</v-icon>
        </div>
      </div>

      <nuxt/>

      <!--  Register form    -->
      <div justify="center">
        <v-dialog
          v-model="showRegisterForm"
          persistent
          max-width="600px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">Création du compte</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-select
                      :items="type_comptes"
                      v-model="account.type_account"
                      outlined
                      label="Type de compte"
                      hint="Le typ de compte que vous voulez créer"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="account.raison_social"
                      outlined
                      label="Raison sociale de l'entreprise*"
                      required
                      hint="Le nom de l'entreprise"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="account.adresse"
                      outlined
                      label="Localisation*"
                      hint="La localisation de l'entreprise"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-select
                      v-model="account.domaine_activite"
                      :items="items"
                      outlined
                      label="Domaine d'activité"
                      hint="Le domaine d'activité de l'entreprise"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-autocomplete
                      v-model="account.secteur_activite"
                      :items="states"
                      outlined
                      label="Secteur d'activité"
                      hint="Le secteur d'activité de l'entreprise"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="account.email"
                      outlined
                      label="Email*"
                      hint="L'email de l'entreprise"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <vue-phone-number-input
                      v-model="account.telephone"
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
                    />
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="account.password"
                      outlined
                      label="Mot de passe*"
                      hint="Mot de passe de connexion à votre compte"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="account.password_confirmation"
                      outlined
                      label="Mot de passe de confirmation*"
                      hint="Confirmer le mot de passe"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*Indique que le champ est obligatoire</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="gray darken-1"
                text
                @click="dialog = false"
              >
                Annuler
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                :loading="registerBtn"
                @click="register"
              >
                S'inscrire
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <!--  Login form    -->
      <div justify="center">
        <v-dialog
          v-model="showLoginForm"
          max-width="600px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">Connexion</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="account.email"
                      outlined
                      label="Email"
                      hint="L'email de l'entreprise"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="account.password"
                      outlined
                      label="Mot de passe"
                      hint="Mot de passe de connexion à votre compte"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-col cols="12">
                <v-btn
                  color="orange darken-1"
                  class="tw-w-full tw-text-white"
                  :loading="registerBtn"
                  @click="register"
                >
                  S'inscrire
                </v-btn>
              </v-col>

            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>


      <Footer/>
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {Header, Footer},
  data() {
    return {
      registerBtn: false,
      account: {
        telephone: "",
        raison_social: "",
        adresse: "",
        email: "",
        password: "",
        password_confirmation: "",
        type_account: "",
        domaine_activite: "",
        secteur_activite: "",
      },
      telephone: "",
      type_comptes: ['Entreprise', 'Professionel', 'Start Up'],
      items: ['Agronimie', 'Finance', 'Technologie', 'Architecture'],
      showRegisterForm: false,
      showLoginForm: false,
      loading: false,
      search: null,
      select: null,
      states: ['Energie vert', 'Pisciculture', 'BTP','Vente de matériel informatique','Commerce Import-Export'],
    }
  },

  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    async register(){
      this.registerBtn = true
      await axios.post('/register', this.account).then( res => {
        this.registerBtn = false
        console.log('Response de la methode post')
        console.log(res)
      }).catch(error => {
        this.registerBtn = false
        console.log(error)
      })

    },
    getphoneresult ($event) {
      this.account.telephone = $event
    },
    querySelections(v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
}
</script>

<style scoped>
.bg-gradient-cover {
  background-color: transparent;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.92));
  background-position-y: -1px;
}

.max-h-98 {
  max-height: 24.3rem;
}

.box-one > article:nth-child(1) {
  padding-top: 0;
  padding-bottom: 0.125rem;
  padding-right: 0.125rem;
}

.box-one > article:nth-child(2) {
  padding-top: 0;
  padding-bottom: 0.125rem;
  padding-left: 0.125rem;
}

.box-one > article:nth-child(3) {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-right: 0.125rem;
}

.box-one > article:nth-child(4) {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.125rem;
}

.juice3 {
  z-index: 10;
  position: relative;
}

.juice3::after {
  content: '';
  position: absolute;
  opacity: .2;
  z-index: -999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('https://previews.123rf.com/images/olgasiv/olgasiv1403/olgasiv140300026/27343111-image-en-noir-sur-un-fond-blanc-dessin-de-l%C3%A9gumes-de-fruits-et-de-baies-.jpg');
}

.text-primary {
  color: #f9b529;
}

.text-primary-lite {
  color: #fac251;
}

.text-secondary {
  color: #294356;
}

.text-secondary-lite {
  color: #d5dee5;
}

.bg-primary {
  background-color: #f9b529;
}


.bg-secondary {
  background-color: #294356;
}

.bg-secondary-lite {
  background-color: #d5dee5;
}

.product {
  background-image: url('https://i.ibb.co/L00dH6V/2021-11-07-14h07-51.png');
}

.product2 {
  background-image: url('https://i.ibb.co/1fZMKPh/2021-11-07-14h08-07.png');
}

.product3 {
  background-image: url('https://i.ibb.co/f9tpvV3/2021-11-07-14h08-32.png');
}

.product4 {
  background-image: url('https://i.ibb.co/42BsKQ2/2021-11-07-14h08-17.png');
}
</style>
