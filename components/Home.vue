<template>
  <section class="">
    <div class="hero">
      <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full pt-[6%]">
        <div class="tw-absolute tw-right-[10%] tw-top-1/2 tw-rounded-full tw-w-5 tw-h-5 tw-bg-green-900"></div>
        <div
          class="tw-pt-16 tw-font-serif lg:py-desktop tw-font-bold tw-px-16 tw-pb-4 tw-text-center tw-text-white tw-uppercase md:tw-text-4xl lg:tw-text-6xl tw-text-2xl tw-z-40 animate-slideDown">
          <h1>Bienvenue Chez Nous !</h1>
        </div>
        <div class="lg:tw-pr-4 tw-items-center tw-justify-center">
          <div class="tw-w-full">
            <div
              class="lg:tw-py-4 md:tw-px-16 tw-flex tw-flex-col lg:tw-flex-row md:tw-flex-nowrap lg:tw-flex-nowrap lg:tw-space-x-10 md:tw-space-y-0 tw-space-y-2">
              <div class="tw-flex tw-justify-center">
                <div class="tw-mb-3 tw-w-full xl:tw-w-96">
                  <select class="tw-form-select tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-3 tw-text-sm lg:tw-text-base tw-font-normal tw-text-gray-700
                      tw-bg-white tw-bg-clip-padding tw-bg-no-repeat tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0
                      focus:tw-text-gray-700 tw-uppercase focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          aria-label="Default select example">
                    <option class="" selected>à la recherche de :</option>
                    <option value="">Sociétés</option>
                    <option value="">Professionnel</option>
                  </select>
                </div>
              </div>

              <div class="tw-flex tw-justify-center">
                <div class="tw-mb-3 tw-w-full xl:tw-w-96">
                  <select class="tw-form-select tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-3 tw-text-sm lg:tw-text-base tw-font-normal tw-text-gray-700
                      tw-bg-white tw-bg-clip-padding tw-bg-no-repeat tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0
                      focus:tw-text-gray-700 tw-uppercase focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          aria-label="Default select example">
                    <option class="" selected>Sélectionner un secteur :</option>
                    <option value="">Banque & Finance</option>
                    <option value="">Agronomie</option>
                    <option value="">Energie renouvelable</option>
                  </select>
                </div>
              </div>
              <div class="tw-flex tw-justify-center">
                <div class="tw-mb-3 tw-w-full xl:tw-w-96">
                  <select class="tw-form-select tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-3 tw-text-sm lg:tw-text-base tw-font-normal tw-text-gray-700
                      tw-bg-white tw-bg-clip-padding tw-bg-no-repeat tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0
                      focus:tw-text-gray-700 tw-uppercase focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                          aria-label="Default select example">
                    <option class="" selected>Choisir une adresse</option>
                    <option value="">Lomé</option>
                    <option value="">Togo</option>
                    <option value="">Ghana</option>
                  </select>
                </div>
              </div>
              <NuxtLink to="/result" type="submit"
                        class="tw-text-serif tw-bg-blue-600 hover:tw-bg-blue-700 hover:tw-text-white tw-h-12 tw-text-center tw-py-2 tw-px-20 tw-text-center tw-rounded-md tw-font-bold tw-text-white tw-z-40 animate-slideDown">
                Rechercher
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="tw-py-8 lg:tw-px-8 tw-bg-[#F3F7F5] tw-rounded-2xl">
      <div class="lg:tw-p-4 tw-text-center">
        <h1
          class="tw-font-serif tw-font-bold tw-bg-white tw-rounded-sm tw-shadow-lg tw-p-8 tw-w-full lg:tw-w-1/2 tw-justify-center tw-text-left lg:tw-m-8 tw-uppercase tw-text-blue-800 md:tw-text-4xl lg:tw-text-4xl tw-text-center tw-text-2xl tw-z-40 animate-slideDown">
          Nos Services</h1>
        <div class="lg:tw-py-4 tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-x-4 lg:tw-space-x-12">
          <div class="tw-flex tw-justify-center">
            <div class="hero1 lg:tw-p-4  tw-rounded-lg  tw-items-center">

              <h1
                class="tw-font-sans tw-bg-white tw-rounded-sm tw-shadow-lg tw-px-16 tw-py-8 tw-text-orange-600 tw-font-bold  tw-text-left tw-m-8 tw-uppercase text-white-600 text-md tw-z-40 animate-slideDown">
                Annuaire Professionnel</h1>
              <p class="tw-px-16 tw-py-16 justify tw-text-white tw-text-justify">

                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Corrupti minima
                similique optio? Cumque porro dolorem dignissimos, facilis tenetur
                temporibus architecto quia.
              </p>

            </div>
          </div>

          <div class="tw-flex tw-justify-center">
            <div class="hero2 tw-rounded-lg tw-items-center">
              <h1
                class="tw-font-sans tw-px-16 tw-py-8 tw-bg-white tw-rounded-sm tw-shadow tw-text-orange-600 tw-font-bold tw-justify-center tw-text-left tw-m-8 tw-uppercase text-white-600 text-md tw-z-40 animate-slideDown">
                Communication</h1>
              <p class="tw-px-16 tw-py-16 justify tw-text-white tw-text-justify">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corrupti minima
                similique optio? Cumque porro dolorem dignissimos, facilis tenetur
                temporibus architecto quia.
              </p>

            </div>
          </div>

          <div class="tw-flex tw-justify-start">
            <div class="hero3  tw-rounded-lg tw-items-center">
              <h1
                class="tw-font-sans tw-px-16 tw-py-8 tw-bg-white tw-rounded-sm tw-shadow tw-text-orange-600 tw-font-bold tw-justify-center tw-text-left tw-m-8 tw-uppercase text-white-600 text-md tw-z-40 animate-slideDown">
                Solutions digital</h1>
              <p class="tw-px-16 tw-py-16 tw-text-white tw-text-justify">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corrupti minima
                similique optio? Cumque porro dolorem dignissimos, facilis tenetur
                temporibus architecto quia.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
    <About/>

    <section class="tw-mt-10 tw-py-8 tw-px-8 tw-mx-8 tw-my-8 lg:px-desktop lg:mx-desktop bg-[#F3F7F5] tw-rounded-2xl">
      <div class="tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-x-4 lg:tw-space-x-12 tw-divide-x-2">
        <div class="basis-1/2 tw-flex tw-space-x-10">
          <h1
            class="tw-font-serif tw-font-bold tw-text-center tw-text-blue-800 tw-uppercase lg:tw-text-4xl  tw-text-2xl tw-z-40 animate-slideDown">
            Ils Nous Font <br>
            Confiance !
          </h1>
        </div>
        <div class="tw-flex tw-items-center tw-justify-evenly tw-space-x-10 basis-1/2">
          <div class="tw-text-center tw-relative">
            <div class="tw-absolute tw-left-0 tw-top-0 tw-rounded-full tw-w-20 tw-h-20 bg-green-400/50 tw-z-10">
            </div>
            <!-- <h1 class="tw-font-bold tw-text-8xl">12</h1>
              <p class="tw-uppercase tw-font-bold tw-text-gray-500">Countries</p> -->
          </div>
          <div class="tw-text-center tw-relative">
            <div class="tw-absolute tw-left-0 tw-top-0 tw-rounded-full tw-w-20 tw-h-20 bg-yellow-400/50 tw-z-10">
            </div>
            <!-- <h1 class="tw-font-bold tw-text-8xl">11K</h1>
              <p class="tw-uppercase tw-font-bold tw-text-gray-500">Participants</p> -->
          </div>
        </div>
      </div>
    </section>
  </section>


</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>


<style>
.hero {
  background-image: url(../assets/img/Ok.png);
  background-size: cover;
  height: 55vh;


}

.hero1 {
  background-image: url(../assets/img/annuaire.svg);
  background-size: cover;
  opacity: 0.9;


}

.hero2 {
  background-image: url(../assets/img/Ok2.svg);
  background-size: cover;
  opacity: 0.9;


}


.hero3 {
  background-image: url(../assets/img/Ok3.svg);
  background-size: cover;
  opacity: 0.9;


}
</style>
