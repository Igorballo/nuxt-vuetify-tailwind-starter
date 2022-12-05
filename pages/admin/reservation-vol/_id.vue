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
           <v-btn small @click="dialogAddOffre = true" color="primary">Ajouter des offres</v-btn>
         </v-card-title>
         <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Date de départ</span>
               <span class="tw-text-lg">EB&666</span>
               <div>
                 <v-btn color="green" dark x-small>confirmer</v-btn>
                 <v-btn color="purple" dark x-small>modifier</v-btn>
               </div>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Date de retour</span>
               <span class="tw-text-lg">EB&666</span>
               <div>
                 <v-btn color="green" dark x-small>confirmer</v-btn>
                 <v-btn color="purple" dark x-small>modifier</v-btn>
               </div>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Aéroport de départ</span>
               <span class="tw-text-lg">EB&666</span>
               <div>
                 <v-btn color="green" dark x-small>confirmer</v-btn>
                 <v-btn color="purple" dark x-small>modifier</v-btn>
               </div>
             </div>
           </div>
           <v-divider/>

           <div class="tw-flex tw-flex-col">
             <div class="tw-flex tw-justify-between">
               <span class="tw-font-semibold tw-text-lg">Aéroport d'arrivée</span>
               <span class="tw-text-lg">EB&666</span>
               <div>
                 <v-btn color="green" dark x-small>confirmer</v-btn>
                 <v-btn color="purple" dark x-small>modifier</v-btn>
               </div>
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
             <v-btn color="primary" @click="dialogAddOffre = true" block>Ajouter des offres</v-btn>
           </v-card-actions>
         </v-card-text>
       </v-card>
     </v-col>
   </v-row>

    <v-dialog width="900px" v-model="dialogAddOffre">
      <v-card>
        <v-card-title>
          <v-spacer/>
          <v-btn small class="primary">+ nouvelle offre</v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-alert color="warning" colored-border border="top" elevation="1" dismissible>
                Le prix d'achat du billet ne sera pas visible au client
              </v-alert>
            </v-col>
          </v-row>
          <v-card>
            <v-card-title>
              <v-btn small color="green" dark>ajouter escale a ce plan</v-btn>
              <v-spacer/>
              <v-icon small color="red">mdi-delete</v-icon>
            </v-card-title>
            <v-card-text>
              <v-autocomplete dense label="Compagnie de voyage" outlined solo/>
              <v-text-field label="Prix d'achat du billet" outlined dense solo/>
              <v-text-field label="Prix de revente du billet" outlined dense solo/>

              <div class="tw-flex tw-justify-between tw-items-center">
                <span>Airpot Tokoin</span>
                <div class="tw-flex tw-items-center">
                  <div class="tw-h-2 tw-w-32 tw-bg-gray-500 tw-border-1">jj</div>
                  <v-icon>mdi-user</v-icon>
                  <div class="tw-h-2 tw-w-full tw-bg-gray-500 tw-border-1"></div>
                </div>
<!--                <v-autocomplete dense label="Airport de destination" />-->
              </div>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  layout: "admin",
  data(){
    return {
      dialogAddOffre: false,
    }
  }
}
</script>

<style scoped>

</style>
