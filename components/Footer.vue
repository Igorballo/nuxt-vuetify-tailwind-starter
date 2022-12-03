<template>
  <div>
    <section class="tw-py-8 tw-px-32 tw-bg-white tw-flex-col tw-gap-4 tw-shadow-lg">
      <div class="tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-justify-between tw-items-center tw-pb-4">
        <img src="~/assets/img/logo.png" class="tw-w-56 tw-h-44" alt="image">

        <div class="tw-flex tw-gap-8 tw-mt-4">
          <a href="#">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                 class="tw-h-5 tw-w-5 tw-fill-current tw-text-black hover:tw-text-black hover:tw-rounded-full" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
              </path>
            </svg>
          </a>
          <a href="#">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                 class="tw-h-5 tw-w-5 tw-fill-current tw-text-black hover:tw-text-black hover:tw-rounded-full" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
              </path>
            </svg>
          </a>
          <a href="#">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                 class="tw-h-5 tw-w-5 tw-fill-current tw-text-black hover:tw-text-black hover:tw-rounded-full" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
              </path>
            </svg>
          </a>
          <a href="#">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube"
                 class="tw-h-5 tw-w-5 tw-fill-current tw-text-black hover:tw-text-black hover:tw-rounded-full" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
              </path>
            </svg>
          </a>

          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 class="tw-h-5 tw-w-5 tw-fill-current tw-text-black">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>

          </a>

        </div>
      </div>
      <hr class="container tw-items-center tw-justify-center tw-border-black tw-cursor-pointer"/>
    </section>

    <section class="tw-py-8 tw-px-12 tw-bg-blue-900 tw-flex-col tw-gap-4">
      <div class="tw-flex md:tw-flex-row tw-flex-col tw-w-full tw-gap-12 tw-items-center tw-pb-4">

        <div class="basis-1/3">
          <h1 class="tw-text-left tw-py-4 md:tw-text-2xl lg:tw-text-2xl tw-uppercase tw-font-extrabold tw-text-red-700 tw-italic tw-mb-4"> About
            MANGLAM </h1>

          <p class="text-md tw-text-white tw-font-normal tw-text-justify tw-font-serif">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, alias, architecto est repudiandae natus,
            mollitia itaque optio nisi debitis impedit magnam deleniti consequatur libero laudantium id amet esse quis
            minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, alias, architecto est repudiandae
            natus, mollitia itaque optio nisi debitis impedit magnam deleniti consequatur libero laudantium id amet esse
            quis minus.
          </p>

        </div>


        <div class="basis-1/3  tw-grid md:tw-grid-cols-1 tw-divide-y-2 tw-text-left tw-gap-2">
          <h1 class="tw-text-left tw-py-4 md:tw-text-2xl lg:tw-text-2xl tw-text-4xl tw-uppercase tw-font-extrabold tw-text-red-700 tw-italic tw-mb-2">
            Stay in the Know </h1>
          <div
            class="tw-font-sans tw-text-left tw-text-white tw-text-justify text-md">
            <nuxt-link to="/">News</nuxt-link>
          </div>
          <div
            class="tw-font-sans tw-text-left tw-text-white tw-text-justify  text-md">
            <nuxt-link to="/service">Services</nuxt-link>
          </div>
          <div
            class="tw-font-sans tw-text-left tw-text-white tw-text-justify  text-md">
            <nuxt-link to="/entreprise">About us</nuxt-link>
          </div>
          <div
            class="tw-font-sans tw-text-left tw-text-white tw-text-justify  text-md">
            <nuxt-link to="/contact">Contact</nuxt-link>
          </div>


        </div>
        <div class=" basis-1/3 tw-grid tw-grid-cols-1 tw-text-left">
          <h1 class="tw-text-left tw-py-4 md:tw-text-2xl lg:tw-text-2xl tw-text-4xl tw-uppercase tw-font-extrabold tw-text-red-700 tw-italic tw-mb-2">
            Contact</h1>

          <p class="text-md tw-text-white tw-font-normal tw-flex tw-flex-col md:tw-flex-row tw-text-justify tw-font-serif tw-pb-2">
            <a href="http://" class="text-md" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="tw-w-10 tw-h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
              </svg>

            </a>
            Manglam Agency
          </p>

          <p class="text-md tw-text-white tw-flex tw-flex-col tw-gap-2 tw-font-normal tw-text-justify tw-font-serif">
        <span>
          Adresse: Lomé, Centre Ville, Togo
        </span>
            <span>
          Phone: +228 90505025
        </span>
            <span>
          Email: info@manglam.com
        </span>


          </p>


        </div>


      </div>

    </section>


    <section class="tw-bg-red-600">

      <p class="tw-px-4 tw-py-4 lg:tw-text-center tw-font-bold tw-text-white tw-text-sm tw-text-center lg:tw-text-lg">Copyright © Manglam 2022.
        Designed by
        <a href="https://mekengroup.com/" class="text-md" target="_blank" rel="noopener noreferrer">MEG</a>
      </p>

    </section>
  </div>
</template>

<script>
export default {}

</script>

<style>

</style>
