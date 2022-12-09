<template>
  <div>
    <div class="tw-relative tw-hidden tw-flex-col-reverse tw-py-16 lg:tw-pt-0 lg:tw-flex-col lg:tw-pb-0">
      <div
        class="tw-inset-y-0 tw-top-0 tw-right-0 tw-z-0 tw-w-full tw-max-w-xl tw-px-4 tw-mx-auto md:tw-px-0 lg:tw-pr-0 lg:tw-mb-0 lg:tw-mx-0 lg:tw-w-7/12 lg:tw-max-w-full lg:tw-absolute xl:tw-px-0">
        <svg
          class="tw-absolute tw-left-0 tw-hidden tw-h-full tw-text-white tw-transform tw--translate-x-1/2 lg:tw-block"
          viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice">
          <path d="M50 0H100L50 100H0L50 0Z"></path>
        </svg>
        <img
          class="tw-object-cover tw-w-full tw-h-56 tw-rounded tw-shadow-lg lg:tw-rounded-none lg:tw-shadow-none md:tw-h-96 lg:tw-h-full"
          src="https://images.unsplash.com/photo-1664511749676-afe0541dd8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="" />
      </div>
      <div
        class="tw-relative tw-flex tw-flex-col tw-items-start tw-w-full tw-max-w-xl tw-px-4 tw-mx-auto md:tw-px-0 lg:tw-px-8 lg:tw-max-w-screen-xl">
        <div class="tw-mb-16 lg:tw-my-40 lg:tw-max-w-lg lg:tw-pr-5">
          <p
            class="tw-inline-block tw-px-3 tw-py-px tw-mb-4 tw-text-xs tw-font-semibold tw-tracking-wider tw-text-teal-900 tw-uppercase tw-rounded-full bg-teal-accent-400">
            Brand new
          </p>
          <h2
            class="tw-mb-5 tw-font-sans tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-4xl sm:tw-leading-none">
            Everything you<br class="tw-hidden md:tw-block" />
            can imagine
            <span class="tw-inline-block text-deep-purple-accent-400">is real</span>
          </h2>
          <p class="tw-pr-5 tw-mb-5 tw-text-base tw-text-gray-700 md:tw-text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae. explicabo.
          </p>
          <div class="tw-flex tw-items-center">
            <a href="/"
              class="tw-inline-flex tw-items-center tw-justify-center tw-h-12 tw-px-6 tw-mr-6 tw-font-medium tw-tracking-wide tw-text-white tw-transition tw-duration-200 tw-rounded tw-shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:tw-shadow-outline focus:tw-outline-none">
              Get started
            </a>
            <a href="/" aria-label=""
              class="tw-inline-flex tw-items-center tw-font-semibold tw-text-gray-800 tw-transition-colors tw-duration-200 hover:text-deep-purple-accent-700">Learn
              more</a>
          </div>
        </div>
      </div>
    </div>

    <div class="tw-bg-no-repeat tw-bg-cover tw-bg-center tw-w-full tw-h-[75vh]"
      style="background-image: url(https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)">
      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <v-form v-model="valid" class="tw-bg-white tw-w-3/5 tw-rounded-lg tw-h-full tw-my-20 tw-p-4 md:tw-p-8 lg:tw-p-12 tw-flex tw-flex-col">
    <v-container>
        <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="arrival"
            :rules="nameRules"
            label="Destination"
            outlined
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <div>
              <v-datetime-picker outlined required label="Jour et heure d'arrivé"
                                 v-model="modal">
                <template slot="dateIcon">
                  <v-icon>mdi-calendar</v-icon>
                </template>
                <template slot="timeIcon">
                  <v-icon>mdi-clock-outline</v-icon>
                </template>
              </v-datetime-picker>

            </div>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="numberDay"
            :rules="nameRules"
            label="Nombre de Jour"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="typeRoom"
            :rules="nameRules"
            label="Type de Chambre"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="occupation"
            :rules="nameRules"
            label="Occupations"
            required
            outlined
          ></v-text-field>
        </v-col>

       
      </v-row>
      <v-row>
       <v-col
          cols="12"
          md="6"
        >
          <v-textarea
            v-model="description"
            :rules="emailRules"
            label="Description"
            required
            outlined
          ></v-textarea>
        </v-col>
      </v-row>
      <v-btn
      depressed
      color="primary"
    >
      Faire une reservation d'Hôtel
    </v-btn>
    </v-container>
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

    <section class="tw-pt-4 tw-pb-20 lg:tw-px-4 tw-px-6 tw-flex-col tw-gap-4">
      <h1
        class="tw-mt-12 tw-mb-6 tw-text-4xl tw-inline-flex tw-items-center tw-gap-3 tw-font-bold tw-uppercase tw-ml-20 tw-font-extrabold tw-text-red-700 tw-italic">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="tw-w-25 tw-h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
        Les hébergements que les clients adorent
      </h1>

      <div class="tw-px-6 lg:tw-px-10 lg:tw-pb-20">
        <div class="tw-flex tw-flex-col tw-space-y-4 tw-mb-6">

          <div class="tw-grid md:tw-grid-cols-4 tw-gap-4">


            <div
              class="tw-col-span-1 tw-h-80 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg tw-shadow-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-rounded-lg"
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="">
              <h1 class="tw-text-2xl tw-font-bold tw-py-2 tw-font-extrabold tw-text-red-700 tw-uppercase">Onomo Hotel
                Lomé</h1>
              <p class="text-md tw-font-bold">⭐️⭐️⭐️ Good</p>
              <p class="tw-text-xl tw-py-1 tw-font-bold">
                À partir de € 47,02 par jour
              </p>
            </div>

            <div
              class="tw-col-span-1 tw-h-80 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg tw-shadow-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-rounded-lg"
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="">
              <h1 class="tw-text-2xl tw-font-bold tw-py-2 tw-font-extrabold tw-text-red-700 tw-uppercase">Hotel 2
                Fevrier Lomé</h1>
              <p class="text-md tw-font-bold">⭐️⭐️⭐️⭐️⭐️ Very Good</p>
              <p class="tw-text-xl tw-py-1 tw-font-bold">
                À partir de € 47,02 par jour
              </p>
            </div>

            <div
              class="tw-col-span-1 tw-h-80  tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg tw-shadow-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-rounded-lg"
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="">
              <h1 class="tw-text-2xl tw-font-bold tw-py-2 tw-font-extrabold tw-text-red-700 tw-uppercase">El Doria
                Hotel</h1>
              <p class="text-md tw-font-bold">⭐️⭐️⭐️ Good</p>
              <p class="tw-text-xl tw-py-1 tw-font-bold">
                À partir de € 47,02 par jour
              </p>

            </div>

            <div
              class="tw-col-span-1 tw-h-80  tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg tw-shadow-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-rounded-lg"
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="">
              <h1 class="tw-text-2xl tw-font-bold tw-py-2 tw-font-extrabold tw-text-red-700 tw-uppercase">Pure
                Plage</h1>
              <p class="text-md tw-font-bold">⭐️⭐️⭐️⭐️ Great</p>
              <p class="tw-text-xl tw-py-1 tw-font-bold">
                À partir de € 47,02 par jour
              </p>
            </div>


          </div>


        </div>


      </div>

    </section>

    <div class="tw-bg-no-repeat tw-bg-cover tw-bg-center tw-w-full tw-h-[75vh]"
      style="background-image: url(https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tourisme',
    layout: 'master'
  }

</script>

<style scoped>

</style>
