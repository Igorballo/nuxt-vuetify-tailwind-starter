<template>
  <div>
    <div class="tw-bg-no-repeat tw-bg-cover tw-bg-center tw-w-full tw-h-[60vh]"
         style="background-image: url(https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80)">
      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pb-8">
        <v-form v-model="valid"
                class="tw-bg-white tw-w-3/5 tw-rounded-lg tw-h-full tw-my-20 tw-p-3 md:tw-p-6 lg:tw-p-12 tw-flex tw-flex-col">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
              depressed
              color="primary"
              class="tw-w-[fit-content] tw-rounded-full tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300"
            >
              Faire une reservation de Tourisme
            </v-btn>
          </v-container>
        </v-form>

      </div>
    </div>


    <!-- Our partners section   -->
    <Partners />

    <section class="tw-pt-10 tw-pb-4 lg:tw-px-8 tw-px-4 tw-bg-white tw-flex-col tw-gap-4 tw-shadow-lg">
      <h1
        class="tw-mt-12 tw-mb-6 tw-text-4xl tw-inline-flex tw-items-center tw-gap-4 tw-font-bold tw-uppercase tw-ml-20 tw-font-extrabold tw-font-extrabold tw-text-red-700 tw-italic">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="tw-w-25 tw-h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
        </svg>
        Meilleures Sites Touristiques
      </h1>

      <div class="tw-px-6 lg:tw-px-20">
        <div class="tw-flex tw-flex-col tw-space-y-4 tw-mb-6">

          <div class="tw-grid md:tw-grid-cols-2 tw-gap-4">
            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1581953636842-74649fd3e004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                   alt="">

              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Mauritius
                Islande</span>
            </div>

            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                   alt="">
              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Maldives
                Islande</span>
            </div>
          </div>

          <div class="tw-grid md:tw-grid-cols-2 tw-gap-4">
            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1569288063643-5d29ad64df09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                   alt="">
              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Singapore</span>
            </div>

            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                   alt="">
              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Sydney</span>
            </div>
          </div>
          <div class="tw-grid md:tw-grid-cols-2 tw-gap-4">
            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1569288063643-5d29ad64df09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                   alt="">
              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Singapore</span>
            </div>

            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                   alt="">
              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Sydney</span>
            </div>
          </div>
        </div>


      </div>


    </section>

    <div class="tw-bg-no-repeat tw-bg-cover tw-bg-center tw-w-full tw-h-[60vh]"
         style="background-image: url(https://images.unsplash.com/photo-1546114609-6e384f564132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tourisme',
  layout: 'master',

  data() {
    return {
      items: [{
        src: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
      },
        {
          src: 'https://images.unsplash.com/photo-1532909825484-d59b5ced9ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1461237439866-5a557710c921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80',
        },
      ],
    }
  }
}

</script>

<style scoped>

</style>
