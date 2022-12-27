<template>
  <div>
    <!-- Sidebar -->
    <div class="tw-fixed tw-flex tw-flex-col tw-top-14 tw-left-0 tw-w-14 hover:tw-w-64 md:tw-w-64 tw-bg-blue-900 dark:tw-bg-gray-900 tw-h-full tw-text-white tw-transition-all tw-duration-300 tw-border-none tw-z-10 sidebar">
      <div class="tw-overflow-y-auto tw-overflow-x-hidden tw-flex tw-flex-col tw-justify-between tw-flex-grow">
        <ul class="tw-flex tw-flex-col tw-py-4 tw-space-y-1">
          <li class="tw-px-5 tw-hidden md:tw-block">
            <div class="tw-flex tw-flex-row tw-items-center tw-h-8">
              <div class="tw-text-sm tw-font-light tw-tracking-wide tw-text-gray-400 tw-uppercase">Main</div>
            </div>
          </li>
          <li>
            <NuxtLink to="/user/dashboard" class="tw-relative tw-flex tw-flex-row tw-items-center tw-h-11 focus:tw-outline-none hover:tw-bg-blue-800 dark:hover:tw-bg-gray-600 text-white-600 hover:text-white-800 tw-border-l-4 tw-border-transparent hover:tw-border-blue-500 dark:hover:tw-border-gray-800 tw-pr-6">
                <span class="tw-inline-flex tw-justify-center tw-items-center tw-ml-4">
                  <svg class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </span>
              <span class="tw-ml-2 tw-text-sm tw-tracking-wide tw-truncate">Tableau de bord</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/user/publications" class="tw-relative tw-flex tw-flex-row tw-items-center tw-h-11 focus:tw-outline-none hover:tw-bg-blue-800 dark:hover:tw-bg-gray-600 text-white-600 hover:text-white-800 tw-border-l-4 tw-border-transparent hover:tw-border-blue-500 dark:hover:tw-border-gray-800 tw-pr-6">
                <span class="tw-inline-flex tw-justify-center tw-items-center tw-ml-4">
                  <svg class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                </span>
              <span class="tw-ml-2 tw-text-sm tw-tracking-wide tw-truncate">Nos publications</span>
              <span class="tw-hidden md:tw-block tw-px-2 tw-py-0.5 tw-ml-auto tw-text-xs tw-font-medium tw-tracking-wide tw-text-blue-500 tw-bg-indigo-50 tw-rounded-full">New</span>
            </NuxtLink>
          </li>
          <li>
            <a href="#" class="tw-relative tw-flex tw-flex-row tw-items-center tw-h-11 focus:tw-outline-none hover:tw-bg-blue-800 dark:hover:tw-bg-gray-600 text-white-600 hover:text-white-800 tw-border-l-4 tw-border-transparent hover:tw-border-blue-500 dark:hover:tw-border-gray-800 tw-pr-6">
                <span class="tw-inline-flex tw-justify-center tw-items-center tw-ml-4">
                  <svg class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                </span>
              <span class="tw-ml-2 tw-text-sm tw-tracking-wide tw-truncate">Statistique</span>
            </a>
          </li>
          <li>
            <a href="#" class="tw-relative tw-flex tw-flex-row tw-items-center tw-h-11 focus:tw-outline-none hover:tw-bg-blue-800 dark:hover:tw-bg-gray-600 text-white-600 hover:text-white-800 tw-border-l-4 tw-border-transparent hover:tw-border-blue-500 dark:hover:tw-border-gray-800 tw-pr-6">
                <span class="tw-inline-flex tw-justify-center tw-items-center tw-ml-4">
                  <svg class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </span>
              <span class="tw-ml-2 tw-text-sm tw-tracking-wide tw-truncate">Notifications</span>
              <span class="tw-hidden md:tw-block tw-px-2 tw-py-0.5 tw-ml-auto tw-text-xs tw-font-medium tw-tracking-wide tw-text-red-500 tw-bg-red-50 tw-rounded-full">1.2k</span>
            </a>
          </li>
          <li class="tw-px-5 tw-hidden md:tw-block">
            <div class="tw-flex tw-flex-row tw-items-center tw-mt-5 tw-h-8">
              <div class="tw-text-sm tw-font-light tw-tracking-wide tw-text-gray-400 tw-uppercase">Parametre</div>
            </div>
          </li>
          <li>
            <a href="#" class="tw-relative tw-flex tw-flex-row tw-items-center tw-h-11 focus:tw-outline-none hover:tw-bg-blue-800 dark:hover:tw-bg-gray-600 text-white-600 hover:text-white-800 tw-border-l-4 tw-border-transparent hover:tw-border-blue-500 dark:hover:tw-border-gray-800 tw-pr-6">
                <span class="tw-inline-flex tw-justify-center tw-items-center tw-ml-4">
                  <svg class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
              <span class="tw-ml-2 tw-text-sm tw-tracking-wide tw-truncate">Profile</span>
            </a>
          </li>
          <li>
            <a href="#" class="tw-relative tw-flex tw-flex-row tw-items-center tw-h-11 focus:tw-outline-none hover:tw-bg-blue-800 dark:hover:tw-bg-gray-600 text-white-600 hover:text-white-800 tw-border-l-4 tw-border-transparent hover:tw-border-blue-500 dark:hover:tw-border-gray-800 tw-pr-6">
                <span class="tw-inline-flex tw-justify-center tw-items-center tw-ml-4">
                  <svg class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
              <span class="tw-ml-2 tw-text-sm tw-tracking-wide tw-truncate">Paramétrage</span>
            </a>
          </li>
        </ul>
        <p class="tw-mb-14 tw-px-5 tw-py-3 tw-hidden md:tw-block tw-text-center tw-text-xs">Copyright @2021</p>
      </div>
    </div>
    <!-- ./Sidebar -->

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
