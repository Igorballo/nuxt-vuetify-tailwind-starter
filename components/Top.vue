<template>
  <header class="tw-py-4 tw-mx-auto tw-sticky tw-top-0 tw-z-50 tw-bg-white">
    <div class="tw-flex lg:tw-flex-row tw-items-center tw-justify-between tw-py-6 lg:px-desktop tw-mx-12 tw-sticky tw-top-0 tw-z-50 tw-bg-white">
      <!-- Header logo -->

      <div class="tw-flex tw-space-x-2 tw-justify-end">
        <h1 class="tw-font-bold tw-text-2xl">
          <nuxt-link to="/"><img src="../assets/img/Ok1.png" alt=""></nuxt-link>
        </h1>
      </div>
      <ul class="tw-font-serif tw-items-center tw-space-x-14 tw-hidden lg:tw-flex">
        <li class="group tw-space-x-10">
          <NuxtLink class="hover tw-font-medium tw-text-xl" to="/">Accueil</NuxtLink>
          <NuxtLink class="hover tw-font-medium tw-text-xl" to="/service">Nos services</NuxtLink>
          <NuxtLink class="hover tw-font-medium tw-text-xl" to="/service">Sociétés</NuxtLink>
          <NuxtLink class="hover tw-font-medium tw-text-xl" to="/start-up">Les Startups</NuxtLink>
          <NuxtLink class="hover tw-font-medium tw-text-xl" to="/top-entreprise">Top 10</NuxtLink>
        </li>
      </ul>
      <div class="tw-font-serif tw-space-x-8 tw-hidden lg:tw-block">
        <button
          class="btn tw-font-medium tw-text-blue-500 tw-text-xl tw-px-7 tw-py-3 tw-border tw-border-blue-500 hover:tw-border-blue-600 tw-rounded"
          @click="$modal.show('showLoginForm')">Connexion
        </button>

        <button
          class="btn green tw-text-white tw-text-xl tw-py-3 tw-px-7 tw-rounded-md tw-bg-blue-500 tw-font-medium hover:tw-bg-blue-600 hover:tw-text-white tw-transition-all"
          @click="$modal.show('showRegisterForm')">Inscription
        </button>

      </div>

      <modal name="showLoginForm" tw-transition="pop-out" :focus-trap="true" :height="500" :width="1000"
             class="tw-bg-gray-900 tw-bg-opacity-80 tw-hidden">
        <div class="tw-relative tw-bg-white tw-rounded-lg animate-fade tw-shadow-xl ">

          <div class="tw-flex tw-justify-between tw-p-5 tw-border-b tw-border-gray-300">
            <span class="tw-flex tw-justify-center tw-w-full">
              <h1 class="tw-font-bold tw-text-3xl tw-uppercase tw-text-blue-500  tw-text-center tw-rounded tw-text-center">Connexion</h1>
            </span>
          </div>
          <div class="tw-px-4 tw-pb-2 tw-mt-5">
            <div class="container tw-px-6 tw-py-12 tw-h-full">
              <form @submit.prevent="">
                <div class="tw-flex tw-items-center tw-h-full tw-gap-6 tw-text-gray-800">
                  <div class="tw-hidden md:tw-block md:tw-w-1/2 tw-mb-12 md:tw-mb-0">
                    <img src="../assets/svg/login.svg" class="tw-w-full" alt="Phone image"/>
                  </div>
                  <div class="tw-w-full md:tw-w-1/2 lg:tw-ml-20">
                    <form>

                      <div class="tw-mb-6">
                        <input type="email"
                               v-model="auth.email"
                               class="form-control tw-block tw-w-full px12 tw-px-4 tw-h-12 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                               placeholder="Addresse email"/>
                      </div>


                      <div class="tw-mb-6">
                        <input type="password"
                               v-model="auth.password"
                               class="form-control tw-block tw-w-full px12 tw-px-4 tw-h-12 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                               placeholder="Mot de passe"/>
                      </div>

                      <div class="tw-flex tw-justify-between tw-items-center tw-mb-6">
                        <div class="form-group form-check">
                          <input type="checkbox"
                                 class="form-check-input tw-appearance-none tw-h-4 tw-w-4 tw-border tw-border-gray-300 tw-rounded-sm tw-bg-white checked:tw-bg-blue-600 checked:tw-border-blue-600 focus:tw-outline-none tw-transition tw-duration-200 tw-mt-1 tw-align-top tw-bg-no-repeat tw-bg-center tw-bg-contain tw-float-left tw-mr-2 tw-cursor-pointer"
                                 id="exampleCheck3" checked/>
                          <label class="form-check-label tw-inline-block tw-text-gray-800">Se rappeller de moi</label>
                        </div>
                        <NuxtLink to="#!"
                                  class="tw-text-blue-600 hover:tw-text-blue-700 focus:tw-text-blue-700 active:tw-text-blue-800 tw-duration-200 tw-transition tw-ease-in-out">
                          Mot
                          de passe oublié?
                        </NuxtLink>
                      </div>

                      <button type="submit"
                              @click="loginAccount()"
                              class="tw-inline-block tw-px-7 tw-py-3 tw-bg-blue-600 tw-text-white tw-font-medium tw-text-sm tw-leading-snug tw-uppercase tw-rounded tw-shadow-md hover:tw-bg-blue-700 hover:tw-shadow-lg focus:tw-bg-blue-700 focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-bg-blue-800 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out tw-w-full"
                              data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <span v-if="loading.login">...</span>
                        <span v-if="!loading.login">Connexion</span>
                      </button>

                      <div
                        class="tw-flex tw-items-center tw-my-4 before:tw-flex-1 before:tw-border-t before:tw-border-gray-300 before:tw-mt-0.5 after:tw-flex-1 after:tw-border-t after:tw-border-gray-300 after:tw-mt-0.5">
                        <p class="tw-text-center tw-font-semibold tw-mx-4 tw-mb-0">OU</p>
                      </div>

                      <a
                        class="tw-px-7 tw-py-3 tw-text-white tw-font-medium tw-text-sm tw-leading-snug tw-uppercase tw-rounded tw-shadow-md hover:tw-shadow-lg focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out tw-w-full tw-flex tw-justify-center tw-items-center tw-mb-3"
                        style="background-color: #3b5998" href="#!" role="button" data-mdb-ripple="true"
                        data-mdb-ripple-color="light">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="tw-w-3.5 tw-h-3.5 tw-mr-2">
                          <path fill="currentColor"
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                        </svg>
                        Continuez avec Facebook
                      </a>
                      <a
                        class="tw-px-7 tw-py-3 tw-text-white tw-font-medium tw-text-sm tw-leading-snug tw-uppercase tw-rounded tw-shadow-md hover:tw-shadow-lg focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out tw-w-full tw-flex tw-justify-center tw-items-center"
                        style="background-color: #55acee" href="#!" role="button" data-mdb-ripple="true"
                        data-mdb-ripple-color="light">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="tw-w-3.5 tw-h-3.5 tw-mr-2">
                          <path fill="currentColor"
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                        </svg>
                        Continuez avec Twitter
                      </a>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </modal>

      <modal name="showRegisterForm" tw-transition="pop-out" :focus-trap="true" :height="800" :width="1000"
             class="tw-bg-gray-900 tw-bg-opacity-90 tw-hidden">
        <div class="tw-relative tw-rounded-lg animate-fade tw-bg-white">
          <div class="tw-flex tw-justify-between tw-p-5 tw-border-b tw-border-gray-300">
            <span class="tw-flex tw-justify-center tw-w-full">
              <h1 class="tw-font-bold tw-text-3xl tw-uppercase tw-text-blue-500  tw-text-center tw-rounded tw-text-center">Inscription</h1>
            </span>
          </div>

          <div class="tw-px-4 tw-pb-2 tw-mt-5">
            <div class="container tw-px-6 tw-py-12 tw-h-full">
              <form @submit.prevent="" method="post">
                <div class="tw-flex tw-items-center tw-h-full tw-gap-6 tw-text-gray-800">
                  <div class="tw-hidden md:tw-block md:tw-w-1/2 tw-mb-12 md:tw-mb-0">
                    <img src="../assets/svg/login.svg" class="tw-w-full" alt="Phone image"/>
                  </div>
                  <div class="tw-w-full md:tw-w-1/2 lg:tw-ml-20">
                    <form v-on:submit.prevent="registerAccount()">

                      <div class="tw-mb-4 tw-inline-flex tw-items-center tw-gap-2">
                        <input v-model="form.is_society" checked type="checkbox" class="tw-h-6 tw-rounded-lg checked">
                        <p v-if="!form.is_society">Je suis un Professionel</p>
                        <p v-if="form.is_society">Je suis une Entreprise</p>
                      </div>
                      <div class="tw-mb-6 md:tw-flex tw-gap-6 tw-items-center">
                        <input
                          v-model="form.nom" required
                          type="text"
                          class="form-control tw-block tw-w-full tw-h-12 tw-px-4 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          placeholder="Votre nom"
                        />
                        <input
                          v-model="form.prenom" required
                          type="text"
                          class="form-control tw-block tw-w-full tw-h-12 tw-px-4 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          placeholder="Votre prénom"
                        />
                      </div>

                      <!-- Raison sociale input -->
                      <div class="tw-mb-6">
                        <input
                          v-model="form.raison_social" required
                          v-if="form.is_society"
                          type="text"
                          class="form-control tw-duration-500 tw-px-4 tw-w-full tw-h-14 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          placeholder="Raison sociale de l'entité"
                        />
                      </div>


                      <!--Email input-->
                      <div class="tw-mb-6">
                        <input
                          v-model="form.email" required
                          type="email"
                          class="form-control tw-block tw-w-full tw-h-12 tw-px-4 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          placeholder="Email de l'entité"
                        />
                      </div>

                      <div class="tw-mb-6">
                        <select v-model="form.domaine_activite" class="tw-form-select tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-3 tw-text-sm lg:tw-text-base tw-text-gray-700
                      tw-bg-white tw-bg-clip-padding tw-bg-no-repeat tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0
                      focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                                aria-label="Default select example">
                          <option class=""  selected>Domaine d'activité</option>
                          <option  value="1">Finance &Banque</option>
                          <option value="2">Agronomie</option>
                          <option  value="3">Technologie de l'information</option>
                        </select>
                        <!--                        <input-->
                        <!--                          v-model="form.domaine_activite" required-->
                        <!--                          type="text"-->
                        <!--                          class="form-control tw-block tw-w-full tw-h-12 tw-px-4 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"-->
                        <!--                          placeholder="Domaine d'activité"-->
                        <!--                        />-->
                      </div>
                      <div class="tw-mb-6 md:tw-flex tw-gap-6 tw-items-center">
                        <input
                          v-model="form.adresse"
                          type="text"
                          class="form-control tw-block tw-w-full tw-h-12 tw-px-4 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          placeholder="Adresse"
                        />
                        <input
                          v-model="form.telephone"
                          type="number" required
                          class="form-control tw-block tw-w-full tw-h-12 tw-px-4 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          placeholder="Numéro de telephone"
                        />
                      </div>

                      <!-- Password input -->
                      <div class="tw-mb-6">
                        <input
                          v-model="form.password" required
                          type="password"
                          name="password"
                          class="form-control tw-block tw-w-full tw-h-12 tw-px-4 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          placeholder="Mot de passe"
                        />
                      </div>

                      <div class="tw-mb-6">
                        <input
                          v-model="form.password_confirmation" required
                          type="password"
                          name="password_confirmation"
                          class="form-control tw-block tw-w-full tw-h-12 tw-px-4 tw-rounded-lg text-md tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          placeholder="Confirmer le mot de passe"
                        />
                      </div>

                      <div class="tw-flex tw-justify-center tw-items-center tw-mb-6">
                        <a
                          href="#!"
                          class="tw-text-blue-600 hover:tw-text-blue-700 focus:tw-text-blue-700 active:tw-text-blue-800 tw-duration-200 tw-transition tw-ease-in-out"
                        >Vous avez déja un compte? <strong class="tw-ml-4 tw-underline tw-text-blue-600">Se connecter</strong></a
                        >
                      </div>

                      <!-- Submit button -->
                      <button
                        @click="registerAccount()"
                        type="submit"
                        class="tw-inline-block tw-px-7 tw-py-3 tw-bg-blue-600 tw-text-white tw-font-medium tw-text-sm tw-leading-snug tw-uppercase tw-rounded tw-shadow-md hover:tw-bg-blue-700 hover:tw-shadow-lg focus:tw-bg-blue-700 focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-bg-blue-800 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out tw-w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        <span v-if="loading.register">...</span>
                        <span v-if="!loading.register">Inscription</span>
                      </button>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </modal>
    </div>
  </header>
</template>

<script>
const MODAL_WIDTH = 656

export default {

  data() {
    return {
      isOpen: false,
      modalWidth: MODAL_WIDTH,

      loading: {
        login: false,
        register: false
      },

      auth: {
        email: "",
        password: ""
      },
      form: {
        is_society: true,
        nom: "",
        prenom: "",
        email: "",
        raison_social: "",
        domaine_activite: "",
        telephone: "",
        adresse: "",
        password: "",
        password_confirmation: "",
      }
    };
  },

  methods: {
    async registerAccount() {
      this.loading.register = true
      await this.axios.post('auth/register', this.form).then(
        this.loading.register = false,
      ).catch(error => {
        this.loading.register = false
        console.log(error)
      })
    },
    loginAccount() {
      this.loading.login = true
      // await this.$axios.post('/api/auth/login', this.auth).then(
      //   console.log("cool")
      // ).catch(error => {
      //   console.log(error)
      // })

    },
    drawer() {
      this.isOpen = !this.isOpen;
    },
    signIn() {
      alert('Sign in')
    },
    register() {
      alert('Register')
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "tw-hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
      this.$modal.show('example')
    });
  }
};
</script>

<style scoped>
.hover {
  --c: linear-gradient(#000 0 0);
  /* update the color here */

  padding-bottom: 0.6em;
  background: var(--c), var(--c);
  background-size: 0.3em 0.1em;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  tw-transition: 0.3s linear, background-size 0.3s 0.2s linear;
}

.hover:hover {
  background-size: 40% 0.1em;
  background-position: 10% 100%, 90% 100%;
}

.button-set {
  margin-bottom: 8px;
}

#register-btn,
#signin-btn {
  margin-left: 8px;
}

.autocomplete-fix {
  position: absolute;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
}

.pop-out-enter-active,
.pop-out-leave-active {
  tw-transition: all 0.5s;
}

.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  tw-transform: translateY(24px);
}
</style>
