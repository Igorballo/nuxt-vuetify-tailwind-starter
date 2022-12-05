<template>
  <v-container fluid>
   <v-row>
     <v-col cols="12">
       <material-card class="card-tabs" color="primary">
         <h2 class="text-center tw-text-2xl">Demande de Réservation no</h2>
       </material-card>
     </v-col>
     <v-col class="tw-flex tw-flex-col tw-gap-4">
       <v-card>
         <v-card-title>
           <v-spacer/>
           Informations du client
           <v-spacer/>
         </v-card-title>
         <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
               <span class="tw-text-lg">EB&666</span>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
               <span class="tw-text-lg">EB&666</span>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
               <span class="tw-text-lg">EB&666</span>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
               <span class="tw-text-lg">EB&666</span>
             </div>
           </div>

         </v-card-text>
       </v-card>

       <v-card>
         <v-card-title class="mb-4">
           <h2 class="tw-text-xl">Informations du voyage</h2>
           <v-spacer/>
           <v-btn small color="primary">Ajouter des offres</v-btn>
         </v-card-title>
         <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Date de départ</span>
               <span class="tw-text-lg">EB&666</span>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Date de retour</span>
               <span class="tw-text-lg">EB&666</span>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Aéroport de départ</span>
               <span class="tw-text-lg">EB&666</span>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Aéroport d'arrivée</span>
               <span class="tw-text-lg">EB&666</span>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Passagers</span>
               <span class="tw-text-lg">5</span>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Adultes</span>
               <span class="tw-text-lg">1</span>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Enfants</span>
               <span class="tw-text-lg">1</span>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Bébé</span>
               <span class="tw-text-lg">1</span>
             </div>
           </div>

           <v-card-actions>
             <v-btn color="primary" block>Ajouter des offres</v-btn>
           </v-card-actions>
         </v-card-text>
       </v-card>
     </v-col>
   </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "admin",
}
</script>

<style scoped>

</style>
