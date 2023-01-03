<template>
  <div>
    <div class="tw-w-full">
      <div class="tw-h-[55vh] tw-bg-center tw-bg-cover tw-w-full"
           style="background-image: url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260)">
        <div
          class="tw-px-4 tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full tw-bg-opacity-60 tw-bg-green-700">
          <div class="tw-flex tw-items-center tw-w-full tw-flex-col tw-gap-8">
            <h1
              class="tw-text-2xl md:tw-text-4xl lg:tw-text-4xl tw-text-center tw-mb-4 lg:tw-mb-8 tw-text-white tw-font-extrabold">
              Lorem ipsum dolor sit consectetur <br> amet adipisicing elit</h1>
            <div
              class="tw-w-full md:tw-w-2/3 lg:tw-w-1/2 lg:tw-px-0 tw-flex tw-flex-col tw-gap-4 md:tw-flex-row tw-items-center lg:tw-h-16 md:tw-bg-white tw-rounded-full">
              <v-autocomplete
                :loading="loading"
                :items="items"
                :search-input.sync="search"
                cache-items
                class="tw-w-full md:tw-w-1/2 tw-rounded-full mx-4"
                height="50"
                flat
                hide-no-data
                hide-details
                label="De quoi avez-vous besoin?"
                placeholder="De quoi avez-vous besoin ?"
                solo
              ></v-autocomplete>

              <div
                class="tw-flex tw-flex-col tw-gap-6 lg:tw-gap-0 lg:tw-flex-row tw-w-full lg:tw-w-1/2 tw-items-center">
                <v-icon color="green darken-2" class="tw-hidden lg:tw-block">mdi-map-marker-radius-outline</v-icon>
                <v-autocomplete
                  :loading="loading"
                  :items="items"
                  :search-input.sync="search"
                  cache-items
                  class="tw-w-full md:tw-w-1/2 tw-rounded-full mx-4 tw-text-sm"
                  height="50"
                  flat
                  hide-no-data
                  hide-details
                  label="Adresse, Quartier, Ville, Pays?"
                  placeholder="Adresse, Quartier, Ville, Pays"
                  solo
                ></v-autocomplete>
              </div>

              <span @click=""
                    class="tw-hidden tw-bg-green-600 md:tw-flex hover:cursor-pointer tw-mr-0.5 lg:tw-mr-1 tw-p-3 lg:tw-p-4 tw-rounded-full tw-justify-center tw-items-center">
                  <v-icon color="white">mdi-magnify</v-icon>
                </span>

              <span
                class="md:tw-hidden tw-mt-2 tw-w-full tw-text-center tw-text-lg tw-font-semibold tw-bg-green-700 tw-text-white tw-px-6 tw-py-2 tw-rounded-full">Rechercher</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pub Card -->
    <div class="tw-bg-white tw-mt-12">
      <section class="bg-opacity-90 tw-py-10">
        <div class="container tw-mx-auto tw-px-4 tw-gap-10 tw-flex tw-flex-col lg:tw-flex-row">
          <!-- left -->
          <div class="tw-relative lg:tw-w-2/3 tw-rounded-xl tw-bg-cover">
            <img class="tw-h-[40vh] tw-w-full" src="https://aget-togo.org/wp-content/uploads/2014/02/arton345.jpg"
                 alt="publicité">
          </div>

          <!-- right -->
          <div class="tw-relative lg:tw-w-1/3 tw-bg-cover tw-bg-white">
            <img class="tw-h-full tw-w-full" src="https://pbs.twimg.com/media/FFCEyqoXIAIIGCV.jpg" alt="publicité">
          </div>
        </div>
      </section>

      <section class="tw-container tw-hidden tw-mx-auto tw-pt-12">
        <!-- title -->
        <div class="tw-relative tw-flex tw-items-end tw-font-bold">
          <h2 class="tw-text-2xl">Featured Brands</h2>
          <a href class="tw-ml-10 tw-flex tw-items-center tw-text-gray-400">
            <span class="tw-text-sm">All Offers</span>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                 class="tw-ml-3 tw-h-3.5 svg-inline--fa fa-chevron-right fa-w-8 fa-9x">
              <path fill="currentColor"
                    d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path>
            </svg>
          </a>
          <div class="tw-ml-auto tw-flex">
            <a href class="tw-h-6 tw-w-6 tw-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-gray-100">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                   class="tw-h-3 tw-text-gray-700 svg-inline--fa fa-chevron-left fa-w-8 fa-3x">
                <path fill="currentColor"
                      d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path>
              </svg>
            </a>
            <a href
               class="tw-ml-1.5 tw-h-6 tw-w-6 tw-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-gray-100">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                   class="tw-h-3 tw-text-gray-700 svg-inline--fa fa-chevron-right fa-w-8 fa-3x">
                <path fill="currentColor"
                      d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path>
              </svg>
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
    </div>

    <!-- Features -->
    <div class="tw-flex tw-flex-col tw-items-center tw-gap-6 tw-my-16">
      <h1
        class="tw-text-4xl tw-text-amber-500 tw-font-semibold tw-border-b-4 tw-border-amber-500 tw-mb-4 tw-text-center">
        Nos Services</h1>
      <div class="tw-flex tw-flex-col tw-gap-6 lg:tw-flex-row tw-items-center tw-justify-center tw-gap-12">
        <div class="tw-w-96 tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-my-4">
          <img class="tw-w-full tw-h-56 tw-object-cover tw-object-center"
               src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
               alt="avatar">
          <div class="tw-flex tw-items-center tw-px-6 tw-py-3 tw-bg-amber-500">
            <svg class="tw-h-6 tw-w-6 tw-text-white tw-fill-current" viewBox="0 0 512 512">
              <path
                d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"/>
            </svg>
            <h1 class="tw-mx-3 tw-text-white tw-font-semibold tw-text-lg">Annuaire Professionnel</h1>
          </div>
          <div class="tw-py-4 tw-px-6">
            <h1 class="tw-text-xl tw-font-semibold tw-text-gray-800">Maxime mollitia,
              molestiae</h1>
            <p class="tw-py-2 tw-text-sm tw-text-justify tw-text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga consequuntur
            </p>
          </div>
        </div>

        <div class="tw-w-96 tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-my-4">
          <img class="tw-w-full tw-h-56 tw-object-cover tw-object-center"
               src="https://images.unsplash.com/photo-1505682614136-0a12f9f7beea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
               alt="avatar">
          <div class="tw-flex tw-items-center tw-px-6 tw-py-3 tw-bg-amber-500">
            <svg class="tw-h-6 tw-w-6 tw-text-white tw-fill-current" viewBox="0 0 512 512">
              <path
                d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"/>
            </svg>
            <h1 class="tw-mx-3 tw-text-white tw-font-semibold tw-text-lg">Communication</h1>
          </div>
          <div class="tw-py-4 tw-px-6">
            <h1 class="tw-text-xl tw-font-semibold tw-text-gray-800">Maxime mollitia,
              molestiae</h1>
            <p class="tw-py-2 tw-text-sm tw-text-justify tw-text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga consequuntur
            </p>
          </div>
        </div>

        <div class="tw-w-96 tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-my-4">
          <img class="tw-w-full tw-h-56 tw-object-cover tw-object-center"
               src="https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
               alt="avatar">
          <div class="tw-flex tw-items-center tw-px-6 tw-py-3 tw-bg-amber-500">
            <svg class="tw-h-6 tw-w-6 tw-text-white tw-fill-current" viewBox="0 0 512 512">
              <path
                d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"/>
            </svg>
            <h1 class="tw-mx-3 tw-text-white tw-font-semibold tw-text-lg">Solutions Digitales</h1>
          </div>
          <div class="tw-py-4 tw-px-6">
            <h1 class="tw-text-xl tw-font-semibold tw-text-gray-800">Maxime mollitia,
              molestiae</h1>
            <p class="tw-py-2 tw-text-sm tw-text-justify tw-text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga consequuntur
            </p>
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

    }
  },


}
</script>

<style scoped>

</style>
