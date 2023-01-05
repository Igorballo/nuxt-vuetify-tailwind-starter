<template>
  <div>
    <div class="tw-hidden tw-relative md:tw-block tw-h-screen tw-w-64"
         style="background-image: url(https://images.unsplash.com/photo-1531651008558-ed1740375b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)">
      <div
        class="tw-bg-[#322328] tw-text-white tw-bg-opacity-90 md:tw-absolute md:tw-inset-0 md:tw-overflow-y-auto md:tw-flex md:tw-flex-nowrap md:tw-overflow-hidden tw-shadow-xl tw-relative tw-z-10 tw-p-3"
      >
        <div
          class="md:tw-flex-col md:tw-items-stretch md:tw-min-h-full md:tw-flex-nowrap tw-px-0 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-w-full tw-mx-auto"
        >
          <!-- Logo -->
          <img class="tw-w-full tw-h-28 tw-hidden" src="@/assets/img/sheesh-logo.png" alt="...">

          <!-- User -->
          <ul class="md:tw-hidden tw-items-center tw-flex tw-flex-wrap tw-list-none">
            <li class="tw-inline-block tw-relative">
              <NotificationDropdown/>
            </li>
            <li class="tw-inline-block tw-relative">
              <UserDropdown/>
            </li>
          </ul>
          <!-- Collapse -->
          <div
            class="md:tw-flex md:tw-flex-col md:tw-items-stretch md:tw-opacity-100 md:tw-relative md:tw-mt-4 md:tw-shadow-none tw-shadow tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-z-40 tw-overflow-y-auto tw-overflow-x-hidden tw-h-auto tw-items-center tw-flex-1 tw-rounded {collapseShow}"
          >
            <!-- Collapse header -->
            <div
              class="md:tw-min-w-full md:tw-hidden tw-block tw-pb-4 tw-mb-4 tw-border-b tw-border-solid tw-border-blueGray-200"
            >
              <div class="tw-flex tw-flex-wrap">
                <div class="tw-w-6/12">
                  <a
                    class="md:tw-block tw-text-left md:tw-pb-2 text-blueGray-600 tw-mr-0 tw-inline-block tw-whitespace-nowrap tw-text-sm tw-uppercase tw-font-bold tw-p-4 tw-px-0"
                    href="/"
                  >
                    Notus Svelte
                  </a>
                </div>
                <div class="tw-w-6/12 tw-flex tw-justify-end">
                  <button
                    type="button"
                    class="tw-cursor-pointer tw-text-black tw-opacity-50 md:tw-hidden tw-px-3 tw-py-1 tw-text-xl tw-leading-none tw-bg-transparent tw-rounded tw-border tw-border-solid tw-border-transparent"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <!-- Form -->
            <form class="tw-mt-6 tw-mb-4 md:tw-hidden">
              <div class="tw-mb-3 tw-pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  class="tw-border-0 tw-px-3 tw-py-2 tw-h-12 tw-border tw-border-solid tw-border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 tw-bg-white tw-rounded tw-text-base tw-leading-snug tw-shadow-none tw-outline-none focus:tw-outline-none tw-w-full tw-font-normal"
                />
              </div>
            </form>

            <!-- Divider -->
            <hr class="tw-my-4 md:tw-min-w-full"/>
            <!-- Heading -->
            <h6
              class="md:tw-min-w-full text-blueGray-500 tw-text-xs tw-uppercase tw-font-bold tw-block tw-pt-1 tw-pb-4 tw-no-underline"
            >
              Apple muzic
            </h6>
            <!-- Navigation -->

            <ul class="md:tw-flex-col md:tw-min-w-full tw-flex tw-flex-col tw-list-none">
              <li class="tw-items-center tw-pl-1 hover:tw-bg-[#4a3e40] hover:tw-bg-opacity-60 hover:tw-rounded">
                <NuxtLink
                  to="/"
                  class="tw-inline-flex tw-items-center tw-text-xs tw-capitalize tw-py-3 tw-font-bold tw-block"
                >
                  <div
                    class="tw-mr-2 tw-text-sm"
                  >
                    <v-icon size="22" color="red darken-1" style="color: red">mdi-play-circle-outline</v-icon>
                  </div>
                  écouter
                </NuxtLink>
              </li>

              <li class="tw-items-center tw-pl-1 hover:tw-bg-[#4a3e40] hover:tw-bg-opacity-60 hover:tw-rounded">
                <NuxtLink
                  to="/"
                  class="tw-inline-flex tw-items-center tw-text-xs tw-capitalize tw-py-3 tw-font-bold tw-block"
                >
                  <div
                    class="tw-mr-2 tw-text-sm"
                  >
                    <v-icon size="22" color="red darken-1" style="color: red">mdi-radio-tower</v-icon>
                  </div>
                  écouter
                </NuxtLink>
              </li>

              <li class="tw-items-center">
                <div
                  class="tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block {location.href.indexOf('/admin/tables') !== -1 ? 'tw-text-red-500 hover:tw-text-red-600':'text-blueGray-700 hover:text-blueGray-500'}"
                >
                  Bibliothèque
                </div>
              </li>
            </ul>

            <!-- Divider -->
            <hr class="tw-my-4 md:tw-min-w-full"/>
            <h6
              class="md:tw-min-w-full text-blueGray-500 tw-text-xs tw-uppercase tw-font-bold tw-block tw-pt-1 tw-pb-4 tw-no-underline"
            >
              Apple muzic
            </h6>
            <ul class="md:tw-flex-col md:tw-min-w-full tw-flex tw-flex-col tw-list-none">
              <li class="tw-items-center tw-pl-1 hover:tw-bg-[#4a3e40] hover:tw-bg-opacity-60 hover:tw-rounded">
                <NuxtLink
                  to="/"
                  class="tw-inline-flex tw-items-center tw-text-xs tw-capitalize tw-py-3 tw-font-bold tw-block"
                >
                  <div
                    class="tw-mr-2 tw-text-sm"
                  >
                    <v-icon size="22" color="red darken-1" style="color: red">mdi-clock-time-nine-outline</v-icon>
                  </div>
                  Ajouts récents
                </NuxtLink>
              </li>

              <li class="tw-items-center tw-pl-1 hover:tw-bg-[#4a3e40] hover:tw-bg-opacity-60 hover:tw-rounded">
                <NuxtLink
                  to="/"
                  class="tw-inline-flex tw-items-center tw-text-xs tw-capitalize tw-py-3 tw-font-bold tw-block"
                >
                  <div
                    class="tw-mr-2 tw-text-sm"
                  >
                    <v-icon size="22" color="red darken-1" style="color: red">mdi-microphone-variant</v-icon>
                  </div>
                  Artistes
                </NuxtLink>
              </li>
              <li class="tw-items-center tw-pl-1 hover:tw-bg-[#4a3e40] hover:tw-bg-opacity-60 hover:tw-rounded">
                <NuxtLink
                  to="/"
                  class="tw-inline-flex tw-items-center tw-text-xs tw-capitalize tw-py-3 tw-font-bold tw-block"
                >
                  <div
                    class="tw-mr-2 tw-text-sm"
                  >
                    <v-icon size="22" color="red darken-1" style="color: red">mdi-album</v-icon>
                  </div>
                  Albums
                </NuxtLink>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // layout: 'master',
  data() {
    return {}
  },


}
</script>

<style scoped>

</style>
