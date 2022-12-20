<template>
  <div>
    <div class="banner tw-bg-green-500 tw-bg-black tw-bg-cover tw-bg-center lg:tw-p-12">
      <div class="tw-flex tw-items-center tw-justify-center tw-h-full tw-py-4 tw-px-8 ">
        <h1
          class="tw-bg-white tw-bg-opacity-60 tw-py-4 tw-px-12 tw-justify-center tw-py-12 tw-text-center tw-text-white tw-font-fond tw-text-2xl md:tw-text-4xl lg:tw-text-5xl tw-uppercase tw-font-extrabold tw-text-red-700 tw-mb-4 tw-uppercase">
          A propos</h1>

      </div>
    </div>


    <section
      class="tw-mt-12 lg:tw-mt-20 tw-px-4 md:tw-px-8 md:tw-mx-8 lg:tw-px-desktop lg:tw-mx-desktop tw-bg-[#fff] tw-rounded-2xl tw-justify-center">
      <div class="tw-flex tw-flex-col tw-flex-col-reverse lg:tw-flex-row lg:tw-space-x-12">
        <div class="tw-flex tw-items-center tw-justify-evenly tw-basis-1/2">
          <div class="tw-absolute tw-left-0 tw-top-0 tw-bg-yellow-400/50 tw-z-10">
          </div>

          <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg tw-shadow-lg"
               src="https://images.unsplash.com/photo-1573132223210-d65883b944aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
               alt="">
        </div>
        <div class="tw-basis-1/2 tw-text-center lg:tw-text-left">
          <p
            class="tw-font-extrabold tw-text-red-700 tw-text-2xl tw-font-bold lg:tw-text-left tw-uppercase tw-pt-3">
            QUI NOUS SOMMES</p>
          <img class="tw-h-2  tw-absolute tw-bottom-0 tw-left-0 tw-right-0"
               src="https://images.unsplash.com/photo-1486556813609-9a827fdc306f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80">

          <p class="lg:tw-text-justify tw-text-md md:tw-text-xl">
            Manglam Tours & Travels est une agence de voyage basé à Lomé,
            composé d’une équipe de professionnels œuvrant pour répondre
            à toutes vos exigences.

            </p>

          <p
            class="tw-font-extrabold tw-text-red-700 tw-text-2xl tw-font-bold lg:tw-text-left tw-uppercase tw-mb-2 tw-mt-10 tw-my-8">
            L'OBJECTIF DE NOTRE ENTREPRISE</p>
          <img class="tw-h-2 tw-absolute tw-bottom-0 tw-left-0 tw-right-0"
               src="https://images.unsplash.com/photo-1486556813609-9a827fdc306f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80">

          <p class="lg:tw-text-justify tw-text-xl">
            Manglam Tours & Travels vise un objectif primordial qui est de
            vous satisfaire où que vous soyez en vous fournissant ce qu’il vous
            faut afin que vous soyez comblé lors de votre séjour. Notre agence
            vous planifie des voyages sur mesure, des voyages individuels ou
            en groupe au niveau national et l’international. <br>
            <br>
            Vous n’avez qu’à choisir votre destination, et Manglam Tours &
            Travels se chargera du reste en commençant par votre Visa, votre
            hébergement ainsi que votre transport une fois arrivé à destination.
            Avec nous, tout est fait pour que vous puissiez réussir votre projet
            de voyage. </p>
        </div>


      </div>
    </section>

    <Partners/>

    <div
      class="tw-px-8  tw-py-8 tw-text-white tw-bg-blue-800 tw-shadow-lg tw-text-center tw-mx-auto tw-my-20">

      <div
        class="tw-flex tw-flex-col lg:tw-flex-row tw-mt-10 tw-text-gray-900 tw-gap-6 tw-justify-center">
        <div class="tw-text-lg lg:tw-text-2xl tw-flex tw-flex-col tw-text-white tw-cursor-pointer">
          <i>250</i>
          <strong> Agences </strong>
        </div>
        <div class="tw-text-lg lg:tw-text-2xl tw-flex tw-flex-col tw-text-white tw-cursor-pointer">


          <i>50</i>
          <strong> Pays </strong>

        </div>
        <div  class="tw-text-lg lg:tw-text-2xl tw-flex tw-flex-col tw-text-white tw-cursor-pointer">
          <i>25</i>
          <strong> Année d'experience </strong>
        </div>
        <div to="/tourisme" class="tw-text-lg lg:tw-text-2xl tw-flex tw-flex-col tw-text-white tw-cursor-pointer">

          <i>4500</i>
          <strong> Clients </strong>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  layout: 'master',
}
</script>

<style scoped>

.banner {
  background-image: url(https://images.unsplash.com/photo-1573132223210-d65883b944aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80);
  background-color: #000;
  background-size: center;
  height: 30vh;
  opacity: 1;
}

</style>
