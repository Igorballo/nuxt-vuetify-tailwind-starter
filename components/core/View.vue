<template>
    <v-main class="grey lighten-3">
        <div style="margin-top: 75px;">
            <v-fade-transition mode="out-in">
                <nuxt></nuxt>
            </v-fade-transition>
        </div>
    </v-main>
</template>

<script>
export default {
    name: 'CoreView',

    metaInfo() {
        return {
            title: 'Vue Material Dashboard by CreativeTim',
        };
    },
};
</script>
