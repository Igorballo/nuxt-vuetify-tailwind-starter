<template>
  <v-app class="tw-font-poppins tw-relative">
    <header class="tw-bg-white tw-shadow-lg tw-h-24 tw-flex tw-justify-between tw-items-center tw-sticky tw-top-0 tw-z-50">
      <div class="tw-flex tw-items-center">
        <a href="/" class=" tw-flex-shrink-0 tw-flex tw-items-center tw-justify-center tw-px-4 lg:tw-px-6">
          <img src="~/assets/images/MET.svg" alt="">
        </a>
        <nav class="tw-hidden xl:tw-block header-links tw-contents tw-font-semibold tw-text-base lg:tw-text-sm">
          <ul class="tw-flex tw-items-center tw-justify-between tw-ml-4">
            <li class="tw-p-3 xl:tw-p-4" :class="$route.path === '/'?'active':''">
              <NuxtLink to="/">
                <span class="">Accueil</span>
              </NuxtLink>
            </li>
            <li class="tw-p-3 xl:tw-p-4" :class="$route.path === '/accomodations'?'active':''">
              <NuxtLink to="accomodations">
                <span>Accomodations</span>
              </NuxtLink>
            </li>
            <li class="tw-p-3 xl:tw-p-4" :class="$route.path === '/reservation'?'active':''">
              <NuxtLink to="/reservation">
                <span>Réservations</span>
              </NuxtLink>
            </li>
            <li class="tw-p-3 xl:tw-p-4" :class="$route.path === '/evenements'?'active':''">
              <NuxtLink to="/evenements">
                <span>Evenements</span>
              </NuxtLink>
            </li>
            <li class="tw-p-3 xl:tw-p-4" :class="$route.path === '/blog'?'active':''">
              <NuxtLink to="/blog" class="tw-flex tw-items-center">
                <span>Actualités</span>
              </NuxtLink>
            </li>

            <!-- <li class="tw-p-3 xl:tw-p-4">
              <a href="" class="tw-flex tw-items-center">
                <span>Nous contacter</span>
              </a>
            </li> -->
          </ul>
        </nav>
      </div>



      <div class="xl:tw-hidden  text-center">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="1000"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-menu
              </v-icon>
            </v-btn>
          </template>

          <v-card width="100%">
            <v-card-title class="tw-flex tw-justify-end">
              <v-icon @click="menu = false" class="">mdi-close</v-icon>
            </v-card-title>
            <v-card-text class="tw-mt-4">
              <ul class="header-links tw-flex tw-flex-col tw-space-y-4 tw-items-center tw-font-semibold tw-text-base">
                <li @click="menu = false"><NuxtLink to="/" :class="$route.path === '/'?'tw-border-b-4 tw-border-yellow-300' : 'tw-border-b-4 tw-border-gray-300'" class="">Accueil</NuxtLink></li>
                <li @click="menu = false"><NuxtLink to="/accomodations" :class="$route.path === '/accomodations'? 'tw-border-yellow-300' : 'tw-border-gray-300'" class="tw-border-b-4 hover:-tw-translate-x-2">Accomodations</NuxtLink></li>
                <li @click="menu = false"><NuxtLink to="/reservation" :class="$route.path === '/reservation'? 'tw-border-yellow-300' : 'tw-border-gray-300'" class="tw-border-b-4 hover:-tw-translate-x-2">Réservations</NuxtLink></li>
                <li @click="menu = false"><NuxtLink to="/evenements" :class="$route.path === '/evenements'? 'tw-border-yellow-300' : 'tw-border-gray-300'" class="tw-border-b-4 hover:-tw-translate-x-2">Evenements</NuxtLink></li>
                <li @click="menu = false"><NuxtLink to="/blog" :class="$route.path === '/blog'? 'tw-border-yellow-300' : 'tw-border-gray-300'" class="tw-border-b-4 hover:-tw-translate-x-2">Actualités</NuxtLink></li>
                <li @click="menu = false"><NuxtLink to="" :class="$route.path === '/contact'? 'tw-border-yellow-300' : 'tw-border-gray-300'" class="tw-border-b-4 hover:-tw-translate-y-6">Contactez-nous</NuxtLink></li>
              </ul>

              <div class="xl:tw-hidden tw-flex tw-flex-col tw-items-center tw-mt-8">
                <a href="" class="mb-4">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa tw-h-4 xl:tw-h-6 fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
                </a>
                <div v-if="!isAuthenticated" class="tw-flex tw-flex-col tw-w-full tw-space-y-3">
                  <button @click="$router.push('/login')" class="tw-w-full tw-bg-green-700 hover:tw-bg-green-800 tw-text-white tw-font-medium tw-px-4 xl:tw-px-6 tw-py-2 xl:tw-py-3 tw-rounded">Connexion</button>
                  <button @click="$router.push('/register')" class="tw-w-full tw-bg-yellow-600 hover:tw-bg-yellow-700 tw-text-white tw-font-bold tw-px-4 xl:tw-px-6 tw-py-2 xl:tw-py-3 tw-rounded">Inscription</button>
                </div>
                <div v-if="isAuthenticated" class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-3">
                  <button @click="$router.push('/user/home')" class="tw-bg-green-700 hover:tw-bg-green-800 tw-text-white tw-font-bold tw-px-4 xl:tw-px-6 tw-py-2 xl:tw-py-3 tw-rounded">Mon espace</button>
                  <button @click="logoutUser" class="tw-bg-red-700 hover:tw-bg-red-800 tw-text-white tw-font-bold tw-px-4 xl:tw-px-6 tw-py-2 xl:tw-py-3 tw-rounded">Déconnextion</button>
                </div>
              </div>
            </v-card-text>

          </v-card>
        </v-menu>
      </div>


      <div class="tw-hidden xl:tw-flex tw-border-l tw-items-center tw-px-4 lg:tw-px-6 xl:tw-px-8">
        <a href="" class="tw-mr-4 lg:tw-mr-6 xl:tw-mr-8">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa tw-h-4 xl:tw-h-6 fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
        </a>
        <div v-if="!isAuthenticated" class="tw-flex tw-items-center tw-justify-center tw-space-x-4">
          <button @click="$router.push('/login')" class="tw-bg-green-700 hover:tw-bg-green-800 tw-text-white tw-font-bold tw-px-4 xl:tw-px-6 tw-py-2 xl:tw-py-3 tw-rounded">Connexion</button>
          <button @click="$router.push('/register')" class="tw-bg-yellow-600 hover:tw-bg-yellow-700 tw-text-white tw-font-bold tw-px-4 xl:tw-px-6 tw-py-2 xl:tw-py-3 tw-rounded">Inscription</button>
        </div>
        <div v-if="isAuthenticated" class="tw-flex tw-items-center tw-justify-center tw-space-x-4">
          <button @click="$router.push('/user/home')" class="tw-bg-green-700 hover:tw-bg-green-800 tw-text-white tw-font-bold tw-px-4 xl:tw-px-6 tw-py-2 xl:tw-py-3 tw-rounded">Mon espace</button>
          <button @click="logoutUser" class="tw-bg-red-700 hover:tw-bg-red-800 tw-text-white tw-font-bold tw-px-4 xl:tw-px-6 tw-py-2 xl:tw-py-3 tw-rounded">Déconnextion</button>
        </div>
      </div>
    </header>
    <div class="tw-bg-white">
      <nuxt/>
    </div>

    <flash-message class="myCustomClass"></flash-message>

    <!--    <footer class="tw-absolute tw-bottom-0 tw-mt-10 tw-h-[80vh] md:tw-h-[70vh] tw-w-full tw-py-4 tw-bg-cover tw-flex tw-flex-col lg:tw-flex-row tw-justify-evenly tw-items-center" :style="{ backgroundImage: `url(${ footer_bacground })` }">-->

    <!--      <div class="tw-relative tw-mt-16 lg:tw-mt-0 tw-hidden lg:tw-block">-->
    <!--        <div class="tw-relative">-->
    <!--          <svg width="800" viewBox="0 0 860 415" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--            <g filter="url(#filter0_d_292_7)">-->
    <!--              <path d="M15 356.444C15 373.246 15 381.647 18.2698 388.064C21.146 393.709 25.7354 398.298 31.3803 401.175C37.7976 404.444 46.1984 404.444 63 404.444H773.505C801.582 404.444 815.621 404.444 823.571 398.563C830.503 393.437 834.893 385.576 835.624 376.986C836.461 367.132 829.099 355.178 814.374 331.272L673.426 102.43C668.866 95.0262 666.586 91.3244 663.528 88.5123C660.819 86.0215 657.676 84.0502 654.254 82.6969C650.391 81.1691 646.065 80.729 637.414 79.8489L67.8583 21.904C49.5456 20.0409 40.3892 19.1094 33.3101 22.1046C27.092 24.7356 21.9432 29.3871 18.6964 35.307C15 42.0466 15 51.2502 15 69.6575V356.444Z" fill="white"/>-->
    <!--            </g>-->
    <!--            <defs>-->
    <!--              <filter id="filter0_d_292_7" x="0" y="0.172363" width="850.688" height="414.272" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">-->
    <!--                <feFlood flood-opacity="0" result="BackgroundImageFix"/>-->
    <!--                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>-->
    <!--                <feOffset dy="-5"/>-->
    <!--                <feGaussianBlur stdDeviation="7.5"/>-->
    <!--                <feComposite in2="hardAlpha" operator="out"/>-->
    <!--                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>-->
    <!--                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_292_7"/>-->
    <!--                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_292_7" result="shape"/>-->
    <!--              </filter>-->
    <!--            </defs>-->
    <!--          </svg>-->
    <!--          <div class="tw-absolute tw-top-0 tw-flex tw-gap-2 tw-w-full tw-h-full tw-items-center">-->
    <!--            <div class="px-8 tw-flex tw-flex-col tw-gap-3">-->
    <!--                <h2 class="tw-uppercase tw-text-lg tw-flex tw-flex-col tw-text-green-600 tw-font-semibold">Liens rapides</h2>-->
    <!--                <span>Accueil</span>-->
    <!--                <span>Accomodations</span>-->
    <!--                <span>Réservations</span>-->
    <!--                <span>Evenements</span>-->
    <!--                <span>A propos</span>-->
    <!--            </div>-->
    <!--            <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-3">-->
    <!--              <AppLocationSvg/>-->
    <!--              <div class="tw-flex tw-gap-3">-->
    <!--                <v-btn style="text-transform: lowercase" class="tw-flex tw-gap-4 tw-items-center tw-justify-center tw-shadow-md tw-rounded-full tw-px-3 tw-py-2">-->
    <!--                  <svg width="20" height="20" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.0146 2.54572C6.43486 2.09261 6.71922 1.46312 6.64159 0.835205C6.03553 0.856991 5.30125 1.19326 4.86702 1.64619C4.47677 2.04764 4.13571 2.68873 4.22677 3.30399C4.90331 3.35055 5.59346 2.99829 6.0146 2.54572ZM7.30452 6.88015C7.29144 5.4727 8.41075 4.79735 8.46099 4.76414C7.8319 3.80892 6.85164 3.67803 6.5029 3.66345C5.669 3.57526 4.87575 4.17242 4.45217 4.17242C4.03016 4.17242 3.37735 3.67522 2.68545 3.6884C1.77619 3.70333 0.938104 4.23673 0.470562 5.08214C-0.474116 6.78246 0.228243 9.30202 1.1492 10.681C1.59912 11.3564 2.13522 12.1138 2.83915 12.0862C3.51796 12.0591 3.77423 11.6311 4.59418 11.6311C5.4136 11.6311 5.64423 12.0862 6.36141 12.0725C7.09116 12.0591 7.55365 11.3843 8.00043 10.7072C8.51664 9.92449 8.72913 9.16622 8.74204 9.12774C8.72564 9.11931 7.31935 8.56132 7.30452 6.88015Z" fill="black"/>-->
    <!--                  </svg>-->
    <!--                  <span class="tw-text-sm">App Store</span>-->
    <!--                </v-btn>-->

    <!--                <v-btn style="text-transform: lowercase" class="tw-flex tw-gap-4 tw-items-center tw-justify-center tw-shadow-md tw-rounded-full tw-px-3 tw-py-2">-->
    <!--                  <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--                    <path d="M0.93635 0.831909C0.909126 0.928915 0.890015 1.03299 0.890015 1.1523V10.9747C0.890015 11.0924 0.908405 11.1959 0.935088 11.2916L6.41207 6.06876L0.93635 0.831909Z" fill="#48A0DC"/>-->
    <!--                    <path d="M2.155 0.450437C1.90006 0.293959 1.64873 0.254794 1.43652 0.308827L6.9364 5.56888L8.54967 4.03076L2.155 0.450437Z" fill="#88C057"/>-->
    <!--                    <path d="M10.9072 5.35075L9.20016 4.39502L7.45203 6.06206L9.23297 7.76573L10.894 6.84772C11.7041 6.383 11.4082 5.63415 10.9072 5.35075Z" fill="#FFCC66"/>-->
    <!--                    <path d="M6.9275 6.56177L1.42078 11.8124C1.63623 11.8731 1.89333 11.8371 2.15475 11.6766L8.56944 8.13199L6.9275 6.56177Z" fill="#ED7161"/>-->
    <!--                  </svg>-->

    <!--                  <span class="tw-text-sm">Play Store</span>-->
    <!--                </v-btn>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <v-card width="300" height="370" class="tw-absolute -tw-top-2 tw-right-8">-->
    <!--          <v-card-text>-->
    <!--            <div>-->
    <!--              <h6 class="tw-text-lg tw-text-green-600 tw-mb-3">Nous contacter</h6>-->
    <!--              <v-text-field label="Nom complet" dense solo/>-->
    <!--              <v-text-field label="Telephone" placeholder="Numero de téléphone" dense solo/>-->
    <!--              <v-textarea label="Votre message" placeholder="Saisissez votre message" rows="4" dense solo/>-->
    <!--              <v-btn small color="primary">Envoyer</v-btn>-->
    <!--            </div>-->
    <!--          </v-card-text>-->
    <!--        </v-card>-->
    <!--      </div>-->

    <!--      <div class="tw-bg-white"></div>-->

    <!--&lt;!&ndash;      social links&ndash;&gt;-->
    <!--      <div class="tw-flex tw-items-center tw-h-full tw-w-1/3 tw-justify-center tw-gap-4">-->
    <!--        <svg v-for="i in 4" width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--          <path d="M44.6138 22.5C44.6138 34.3741 34.9879 44 23.1138 44C11.2396 44 1.61377 34.3741 1.61377 22.5C1.61377 10.6259 11.2396 1 23.1138 1C34.9879 1 44.6138 10.6259 44.6138 22.5Z" stroke="white" stroke-width="2"/>-->
    <!--          <path d="M18.3013 19.375C19.2333 19.375 19.9888 18.6195 19.9888 17.6875C19.9888 16.7555 19.2333 16 18.3013 16C17.3693 16 16.6138 16.7555 16.6138 17.6875C16.6138 18.6195 17.3693 19.375 18.3013 19.375Z" fill="white"/>-->
    <!--          <path d="M19.7075 20.5H16.895C16.7398 20.5 16.6138 20.626 16.6138 20.7812V29.2188C16.6138 29.374 16.7398 29.5 16.895 29.5H19.7075C19.8628 29.5 19.9888 29.374 19.9888 29.2188V20.7812C19.9888 20.626 19.8628 20.5 19.7075 20.5Z" fill="white"/>-->
    <!--          <path d="M28.0871 20.1125C26.885 19.7007 25.3815 20.0624 24.4798 20.711C24.4488 20.59 24.3386 20.5 24.2075 20.5H21.395C21.2398 20.5 21.1138 20.626 21.1138 20.7813V29.2188C21.1138 29.374 21.2398 29.5 21.395 29.5H24.2075C24.3628 29.5 24.4888 29.374 24.4888 29.2188V23.155C24.9433 22.7635 25.5288 22.6387 26.0081 22.8423C26.4727 23.0386 26.7388 23.5178 26.7388 24.1563V29.2188C26.7388 29.374 26.8648 29.5 27.02 29.5H29.8325C29.9878 29.5 30.1138 29.374 30.1138 29.2188V23.5898C30.0817 21.2785 28.9944 20.423 28.0871 20.1125Z" fill="white"/>-->
    <!--        </svg>-->

    <!--      </div>-->

    <!--    </footer>-->
    <footer class="tw-text-white tw-bg-gray-900 lg:tw-grid lg:tw-grid-cols-5">
      <aside class="footer-background tw-bg-center tw-bg-auto tw-hidden lg:tw-relative lg:tw-col-span-2 lg:tw-block">

      </aside>

      <div class="tw-px-4 tw-pt-16 tw-pb-12 sm:tw-px-6 lg:tw-px-8 lg:tw-col-span-3">
        <div class="tw-grid tw-justify-items-center tw-grid-cols-1 tw-px-8 md:px-0 md:tw-gap-8 tw-gap-16 sm:tw-grid-cols-2">
          <v-card class="tw-w-full" height="440">
            <v-card-text>
              <div>
                <h6 class="tw-text-lg tw-text-green-600 tw-mb-3">Nous contacter</h6>
                <form>
                  <v-text-field
                    v-model="form.nom"
                    :counter="10"
                    label="Nom Complet"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="form.telephone"
                    label="Telephone"
                    type="number"
                    required

                  ></v-text-field>
                  <v-textarea
                    v-model="form.message"
                    filled
                    name=""
                    label="Votre Message"
                  >
                  </v-textarea>

                  <v-btn class="mr-4 tw-bg-green-800 tw-text-white" @click="sendMessage">Envoyer</v-btn>


                </form>
              </div>
            </v-card-text>
          </v-card>

          <div class="">
            <div class="tw-grid tw-grid-cols-1 tw-justify-items-center tw-gap-4">
              <div class="tw-text-center md:tw-text-left">
                <p class="tw-font-medium tw-text-lg">Support</p>

                <nav class="tw-flex tw-flex-col tw-mt-4 tw-text-base tw-text-gray-300 tw-space-y-2">
                  <NuxtLink to="/" class="hover:tw-opacity-75"> Accueil </NuxtLink>
                  <NuxtLink to="/accomodations" class="hover:tw-opacity-75"> Accomodations </NuxtLink>
                  <NuxtLink to="/reservation" class="hover:tw-opacity-75"> Réservations </NuxtLink>
                  <NuxtLink to="/evenements" class="hover:tw-opacity-75"> Evenements </NuxtLink>
                  <NuxtLink to="/about" class="hover:tw-opacity-75"> A propos </NuxtLink>
                </nav>
              </div>
            </div>

            <div class="tw-flex tw-mt-16 tw-space-x-3">
              <a class="tw-p-2 tw-border tw-rounded-full tw-border-white hover:tw-opacity-75" href="" target="_blank" rel="noreferrer">
                <span class="tw-sr-only"> Facebook </span>

                <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
              </a>

              <a class="tw-p-2 tw-border tw-rounded-full tw-border-white hover:tw-opacity-75" href="" target="_blank" rel="noreferrer">
                <span class="tw-sr-only"> Instagram </span>

                <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>

              <a class="tw-p-2 tw-border tw-rounded-full tw-border-white hover:tw-opacity-75" href="" target="_blank" rel="noreferrer">
                <span class="tw-sr-only"> Twitter </span>

                <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a class="tw-p-2 tw-border tw-rounded-full tw-border-white hover:tw-opacity-75" href="" target="_blank" rel="noreferrer">
                <span class="tw-sr-only"> Dribbble </span>

                <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="tw-pt-6 tw-mt-12 tw-border-t tw-border-gray-800">
          <div class="tw-text-sm tw-text-gray-300 sm:tw-items-center sm:tw-justify-between sm:tw-flex">
            <div class="tw-flex tw-justify-center tw-space-x-3">
              <NuxtLink to="/" class="hover:tw-opacity-75"> Politique de confidentialité </NuxtLink>
              <NuxtLink to="/" class="hover:tw-opacity-75"> Termes & Conditions d'utilisation </NuxtLink>
            </div>

            <div class="tw-flex tw-justify-center tw-items-center">
              <span class="">&copy; 2022 Mek's Events Togo.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>


  </v-app>
</template>

<script>
require('vue-flash-message/dist/vue-flash-message.min.css');
import footer_bacground from "/assets/images/footer_background.png"


export default {
  name: "karaevents",

  data(){
    return {
      menu: false,
      footer_bacground,
      form: {
        nom: '',
        telephone: '',
        message: ''
      },
    }
  },

  methods: {
    async sendMessage() {
      await axios.post('/contacts', this.form).then((response) => {
        this.showToast('success', 'Message envoyé avec succès')

        this.form = {
          nom: '',
          telephone: '',
          message: ''
        }

      }).catch(error => {
        console.log(error)
        this.showToast('error', 'Une erreur s\'est produite')
      })

    }

  }
}
</script>

<style>
@import url('../assets/css/main.css');

.footer-background {
  background-image: url(../assets/images/footer2.png);
  background-position: center;
  background-size: cover;
}
.header-links li span {
  position: relative;
  z-index: 0;
}

.header-links li span::before {
  content: '';
  position: absolute;
  z-index: -1;
  bottom: 2px;
  left: -4px;
  right: -4px;
  display: block;
  height: 6px;
}

.header-links li.active span::before {
  background-color: #fcae04;
}

.header-links li:not(.active):hover span::before {
  background-color: #ccc;
}
</style>
