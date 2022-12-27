<template>
  <v-app>
    <div class="">
      <header class="tw-mx-auto tw-sticky tw-py-4 tw-top-0 tw-z-50 tw-bg-white">
        <div class="tw-flex lg:tw-flex-row tw-items-center tw-justify-between lg:px-desktop tw-mx-12 tw-sticky tw-top-0">
          <!-- Header logo -->
          <div class="tw-flex tw-space-x-2 tw-justify-end tw-bg-white tw-rounded-r-full">
            <h1 class="tw-font-bold tw-text-2xl">
              <nuxt-link to="/"><img src="../assets/img/Ok1.png" alt=""></nuxt-link>
            </h1>
          </div>
          <ul class="tw-items-center tw-space-x-14 tw-hidden lg:tw-flex">
            <li class="tw-space-x-10 tw-font-medium tw-text-md">
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
              @click="$modal.show('showLoginForm')">Connexion
            </button>

            <button
              class="tw-text-white tw-text-lg tw-px-7 tw-rounded-md tw-bg-amber-500 tw-font-medium hover:tw-bg-amber-600 hover:tw-text-white tw-transition-all"
              @click="$modal.show('showRegisterForm')">Inscription
            </button>
          </div>
        </div>
      </header>

      <div class="tw-w-full">
        <div class="tw-h-[60vh] tw-bg-center tw-bg-cover tw-w-full" style="background-image: url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260)">
          <div class="tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full tw-bg-opacity-60 tw-bg-green-600">
            <div class="tw-flex tw-items-center tw-w-full tw-flex-col tw-gap-8">
              <h1 class="tw-text-5xl tw-text-center tw-mb-10 tw-text-white tw-font-extrabold">Lorem ipsum dolor sit consectetur <br> amet adipisicing elit</h1>
              <div class="tw-w-1/2 tw-flex tw-items-center tw-h-20 tw-bg-white tw-rounded-full">
                <v-autocomplete
                  :loading="loading"
                  :items="items"
                  :search-input.sync="search"
                  cache-items
                  class="tw-w-1/2 mx-4"
                  height="60"
                  flat
                  hide-no-data
                  hide-details
                  label="What state are you from?"
                  placeholder="De quoi avez-vous besoin ?"
                  solo
                ></v-autocomplete>

                <div class="tw-inline-flex tw-w-1/2 tw-items-center">
                  <v-icon color="green darken-2">mdi-map-marker-radius-outline</v-icon>
                  <v-autocomplete
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search"
                    cache-items
                    class="mx-4"
                    height="60"
                    flat
                    hide-no-data
                    hide-details
                    label="What state are you from?"
                    placeholder="Adresse, Quartier, Ville, Pays"
                    solo
                  ></v-autocomplete>
                </div>

                <span @click="" class="hover:cursor-pointer tw-bg-green-600 tw-mr-2 tw-h-16 tw-w-16 tw-rounded-full tw-flex tw-justify-center tw-items-center">
                  <v-icon color="white">mdi-magnify</v-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- component -->
      <div class="tw-h-full tw-bg-white">
        <!-- body -->
        <main>
          <section class="juice3 tw-bg-gray-100 tw-bg-opacity-90 tw-py-10">
            <div class="container tw-mx-auto tw-px-4 tw-flex tw-flex-col lg:tw-flex-row">
              <!-- left -->
              <div class="juice tw-relative lg:tw-w-2/3 tw-rounded-xl bg-secondary-lite tw-bg-cover tw-p-8 md:tw-p-16">
                <p class="tw-max-w-sm text-secondary tw-text-3xl md:tw-text-4xl tw-font-semibold">Active Summer With Juice Milk 300ml</p>
                <p class="tw-max-w-xs tw-pr-10 text-secondary tw-font-semibold tw-mt-8">New arrivals with naturre fruits, juice milks, essential for summer</p>
                <button class="tw-mt-20 tw-bg-white tw-font-semibold tw-px-8 tw-py-2 tw-rounded">Shop Now</button>
                <div class="tw-absolute tw-bottom-8 tw-right-8 md:tw-bottom-5 md:tw-right-5 tw-flex">
                  <a href class="tw-h-6 tw-w-6 tw-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-white">
                    <svg  aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="tw-h-3 tw-text-gray-700 svg-inline--fa fa-chevron-left fa-w-8 fa-3x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
                  </a>
                  <a href class="tw-ml-1.5 tw-h-6 tw-w-6 tw-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-yellow-400">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="tw-h-3 tw-text-gray-700 svg-inline--fa fa-chevron-right fa-w-8 fa-3x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                  </a>
                </div>
              </div>
              <!-- right -->
              <div class="juice2 tw-mt-6 lg:tw-mt-0 lg:tw-ml-6 lg:tw-w-1/3 tw-rounded-xl bg-primary-lite tw-bg-cover tw-p-8 md:tw-p-16">
                <div class="tw-max-w-sm">
                  <p class="tw-text-3xl md:tw-text-4xl tw-font-semibold tw-uppercase">20% sale off</p>
                  <p class="tw-mt-8 tw-font-semibold">Syncthetic seeds<br />2.0 OZ</p>
                  <button class="tw-mt-20 tw-bg-white tw-font-semibold tw-px-8 tw-py-2 tw-rounded">Shop Now</button>
                </div>
              </div>
            </div>
          </section>

          <section class="container tw-hidden tw-mx-auto tw-pt-12">
            <!-- title -->
            <div class="tw-relative tw-flex tw-items-end tw-font-bold">
              <h2 class="tw-text-2xl">Featured Brands</h2>
              <a href class="tw-ml-10 tw-flex tw-items-center tw-text-gray-400">
                <span class="tw-text-sm">All Offers</span>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="tw-ml-3 tw-h-3.5 svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
              </a>
              <div class="tw-ml-auto tw-flex">
                <a href class="tw-h-6 tw-w-6 tw-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-gray-100">
                  <svg  aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="tw-h-3 tw-text-gray-700 svg-inline--fa fa-chevron-left fa-w-8 fa-3x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
                </a>
                <a href class="tw-ml-1.5 tw-h-6 tw-w-6 tw-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-gray-100">
                  <svg  aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="tw-h-3 tw-text-gray-700 svg-inline--fa fa-chevron-right fa-w-8 fa-3x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                </a>
              </div>
            </div>
            <!-- cards -->
            <div class="tw-mt-10">
              <ul class="tw--m-3.5 tw-flex">
                <li class="product tw-m-3.5 tw-h-48 tw-w-1/4 tw-bg-cover tw-rounded-xl"></li>
                <li class="product2 tw-m-3.5 tw-h-48 tw-w-1/4 tw-bg-cover tw-rounded-xl"></li>
                <li class="product4 tw-m-3.5 tw-h-48 tw-w-1/4 tw-bg-cover tw-rounded-xl"></li>
                <li class="product3 tw-m-3.5 tw-h-48 tw-w-1/4 tw-bg-cover tw-rounded-xl"></li>
              </ul>
            </div>
          </section>
        </main>
      </div>

      <!-- footer -->
      <footer class="tw-mx-20 tw-mt-16 tw-h-48">
        <hr>
        <div class="tw-mx-auto tw-py-5">
          <a href>&copy; 2022 <span class="tw-font-bold">Contact Pro</span> Tous droits reservé</a>
        </div>
      </footer>
    </div>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Wyoming',
      ],
    }
  },

  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections (v) {
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
  background-image: linear-gradient(transparent,rgba(0,0,0,0.92));
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



.juice {
  background-image: url('https://i.ibb.co/SN2Sp4T/juice.png');
}

.juice2 {
  background-image: url('https://i.ibb.co/yyMXMSF/juice2.png');
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

.bg-primary-lite {
  background-color: #fac251;
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
