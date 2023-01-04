<template>
  <div>
    <div class="tw-bg-cover tw-relative" >
      <img class="tw-h-screen tw-w-64" src="https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2150&q=80" alt="image">

      <div
        class="tw-hidden tw-bg-red-900 tw-bg-opacity-80 md:tw-left-0 md:tw-block md:tw-fixed md:tw-top-0 md:tw-bottom-0 md:tw-overflow-y-auto md:tw-flex-row md:tw-flex-nowrap md:tw-overflow-hidden tw-shadow-xl tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-relative md:tw-w-64 tw-z-10 tw-py-4 tw-px-4"
      >
        <div
          class="md:tw-flex-col md:tw-items-stretch md:tw-min-h-full md:tw-flex-nowrap tw-px-0 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-w-full tw-mx-auto"
        >
          <!-- Toggler -->
          <button
            class="tw-cursor-pointer tw-text-black tw-opacity-50 md:tw-hidden tw-px-3 tw-py-1 tw-text-xl tw-leading-none tw-bg-transparent tw-rounded tw-border tw-border-solid tw-border-transparent"
            type="button"
          >
            <i class="fas fa-bars"></i>
          </button>
          <!-- Brand -->
          <a
            class="md:tw-block tw-text-left md:tw-pb-2 text-blueGray-600 tw-mr-0 tw-inline-block tw-whitespace-nowrap tw-text-sm tw-uppercase tw-font-bold tw-p-4 tw-px-0"
            href="/"
          >
            Notus Svelte
          </a>
          <!-- User -->
          <ul class="md:tw-hidden tw-items-center tw-flex tw-flex-wrap tw-list-none">
            <li class="tw-inline-block tw-relative">
              <NotificationDropdown />
            </li>
            <li class="tw-inline-block tw-relative">
              <UserDropdown />
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
            <hr class="tw-my-4 md:tw-min-w-full" />
            <!-- Heading -->
            <h6
              class="md:tw-min-w-full text-blueGray-500 tw-text-xs tw-uppercase tw-font-bold tw-block tw-pt-1 tw-pb-4 tw-no-underline"
            >
              Apple muzic
            </h6>
            <!-- Navigation -->

            <ul class="md:tw-flex-col md:tw-min-w-full tw-flex tw-flex-col tw-list-none">
              <li class="tw-items-center tw-pl-1 hover:tw-bg-red-400 hover:tw-rounded">
                <NuxtLink
                  to="/"
                  class="tw-inline-flex tw-items-center tw-text-xs tw-capitalize tw-py-3 tw-font-bold tw-block"
                >
                  <div
                    class="tw-mr-2 tw-text-sm"
                  >
                    <v-icon size="22" color="red darken-1" style="color: red">mdi-view-dashboard-outline</v-icon>
                  </div>
                  écouter
                </NuxtLink>
              </li>

              <li class="tw-items-center">
                <NuxtLink
                  to="/"
                  class="tw-inline-flex tw-items-center tw-text-xs tw-capitalize tw-py-3 tw-font-bold tw-block {location.href.indexOf('/admin/dashboard') !== -1 ? 'tw-text-red-500 hover:tw-text-red-600':'text-blueGray-700 hover:text-blueGray-500'}"
                >
                  <div
                    class="tw-mr-2 tw-text-sm {location.href.indexOf('/admin/dashboard') !== -1 ? 'tw-opacity-75' : 'text-blueGray-300'}"
                  >
                    <v-icon size="22" color="red darken-1">mdi-view-dashboard-outline</v-icon>
                  </div>
                  Radio
                </NuxtLink>
              </li>

              <li class="tw-items-center">
                <a
                  href="/admin/tables"
                  class="tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block {location.href.indexOf('/admin/tables') !== -1 ? 'tw-text-red-500 hover:tw-text-red-600':'text-blueGray-700 hover:text-blueGray-500'}"
                >
                  <i
                    class="fas fa-table tw-mr-2 tw-text-sm {location.href.indexOf('/admin/tables') !== -1 ? 'tw-opacity-75' : 'text-blueGray-300'}"
                  ></i>
                  Tables
                </a>
              </li>
            </ul>

            <!-- Divider -->
            <hr class="tw-my-4 md:tw-min-w-full" />
            <!-- Heading -->
            <h6
              class="md:tw-min-w-full text-blueGray-500 tw-text-xs tw-uppercase tw-font-bold tw-block tw-pt-1 tw-pb-4 tw-no-underline"
            >
              Auth Layout Pages
            </h6>
            <!-- Navigation -->

            <ul class="md:tw-flex-col md:tw-min-w-full tw-flex tw-flex-col tw-list-none md:tw-mb-4">
              <li class="tw-items-center">
                <a
                  class="text-blueGray-700 hover:text-blueGray-500 tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block"
                  href="/auth/login"
                >
                  <i class="fas fa-fingerprint text-blueGray-300 tw-mr-2 tw-text-sm"></i>
                  Login
                </a>
              </li>

              <li class="tw-items-center">
                <a
                  class="text-blueGray-700 hover:text-blueGray-500 tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block"
                  href="/auth/register"
                >
                  <i class="fas fa-clipboard-list text-blueGray-300 tw-mr-2 tw-text-sm"></i>
                  Register
                </a>
              </li>
            </ul>

            <!-- Divider -->
            <hr class="tw-my-4 md:tw-min-w-full" />
            <!-- Heading -->
            <h6
              class="md:tw-min-w-full text-blueGray-500 tw-text-xs tw-uppercase tw-font-bold tw-block tw-pt-1 tw-pb-4 tw-no-underline"
            >
              No Layout Pages
            </h6>
            <!-- Navigation -->

            <ul class="md:tw-flex-col md:tw-min-w-full tw-flex tw-flex-col tw-list-none md:tw-mb-4">
              <li class="tw-items-center">
                <a
                  class="text-blueGray-700 hover:text-blueGray-500 tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block"
                  href="/landing"
                >
                  <i class="fas fa-newspaper text-blueGray-300 tw-mr-2 tw-text-sm"></i>
                  Landing Page
                </a>
              </li>

              <li class="tw-items-center">
                <a
                  class="text-blueGray-700 hover:text-blueGray-500 tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block"
                  href="/profile"
                >
                  <i class="fas fa-user-circle text-blueGray-300 tw-mr-2 tw-text-sm"></i>
                  Profile Page
                </a>
              </li>
            </ul>

            <!-- Divider -->
            <hr class="tw-my-4 md:tw-min-w-full" />
            <!-- Heading -->
            <h6
              class="md:tw-min-w-full text-blueGray-500 tw-text-xs tw-uppercase tw-font-bold tw-block tw-pt-1 tw-pb-4 tw-no-underline"
            >
              Documentation
            </h6>
            <!-- Navigation -->
            <ul class="md:tw-flex-col md:tw-min-w-full tw-flex tw-flex-col tw-list-none md:tw-mb-4">
              <li class="tw-inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/colors/notus"
                  target="_blank"
                  class="text-blueGray-700 hover:text-blueGray-500 tw-text-sm tw-block tw-mb-4 tw-no-underline tw-font-semibold"
                >
                  <i class="fas fa-paint-brush tw-mr-2 text-blueGray-300 tw-text-base"></i>
                  Styles
                </a>
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
    return {

    }
  },


}
</script>

<style scoped>

</style>
