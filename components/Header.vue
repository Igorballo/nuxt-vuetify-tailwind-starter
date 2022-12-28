<template>
  <div class="tw-mx-auto tw-sticky tw-py-4 tw-top-0 tw-z-50 tw-bg-white">
    <div class="tw-flex lg:tw-flex-row tw-items-center tw-justify-between lg:px-desktop tw-mx-4 lg:tw-mx-12 tw-sticky tw-top-0">
      <!-- Header logo -->
      <div class="tw-flex tw-justify-end tw-bg-white tw-rounded-r-full">
        <h1 class="tw-font-bold tw-text-2xl">
          <nuxt-link to="/"><img src="../assets/img/Ok1.png" alt=""></nuxt-link>
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
          @click="$modal.show('showLoginForm')">Connexion
        </button>

        <button
          class="tw-text-white tw-text-lg tw-px-6 tw-rounded-md tw-bg-amber-500 tw-font-medium hover:tw-bg-amber-600 hover:tw-text-white tw-transition-all"
          @click="$modal.show('showRegisterForm')">Inscription
        </button>
      </div>

      <v-icon color="blue" class="lg:tw-hidden">mdi-menu</v-icon>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
