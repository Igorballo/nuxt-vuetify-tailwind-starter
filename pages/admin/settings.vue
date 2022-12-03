<template>
  <div>
    <v-row>
      <v-breadcrumbs :items="breadcumb"/>
    </v-row>
    <v-row class="ma-2">
      <v-card width="100%">
        <v-card-text>
          <v-tabs
            align-with-title
            v-model="tabs"
            fixed-tabs
            height="5rem"
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab
              href="#mobile-tabs-5-1"
              class="primary--text"
            >
              <v-row>
                <v-col cols="12">
                  <v-icon>mdi-clock-alert</v-icon>
                </v-col>
                <v-col cols="12">
                  <span class="tw-whitespace-nowrap tw-text-xs">Général</span>
                </v-col>
              </v-row>
            </v-tab>

            <v-tab
              href="#mobile-tabs-5-2"
              class="primary--text"
            >
              <v-row>
                <v-col cols="12">
                  <v-icon>mdi-cash-100</v-icon>
                </v-col>
                <v-col cols="12">
                  <span class="tw-whitespace-nowrap tw-text-xs">Transactions & logs</span>
                </v-col>
              </v-row>
            </v-tab>

            <v-tab
              href="#mobile-tabs-5-3"
              class="primary--text"
            >
              <v-row>
                <v-col cols="12">
                  <v-icon>mdi-check</v-icon>
                </v-col>
                <v-col cols="12">
                  <span class="tw-whitespace-nowrap tw-text-xs">Station de bus</span>
                </v-col>
              </v-row>
            </v-tab>

            <v-tab
              href="#mobile-tabs-5-1"
              class="primary--text"
            >
              <v-row>
                <v-col cols="12">
                  <v-icon>mdi-clock-alert</v-icon>
                </v-col>
                <v-col cols="12">
                  <span class="tw-whitespace-nowrap tw-text-xs">Hotels</span>
                </v-col>
              </v-row>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabs">
            <v-tab-item
              :value="'mobile-tabs-5-' + 1"
            >
              <v-card flat>
                <v-card-text class="tw-mb-6 tw-space-y-8">
                  <v-form>
                    <v-row>
                      <v-col cols="12">
                        <v-card elevation="2">
                          <v-card-title>
                            Notifications
                          </v-card-title>
                          <v-card-text>
                            <v-checkbox label="Activer les notifications mails"></v-checkbox>
                            <v-text-field label="Adresse mail des notifications" outlined></v-text-field>
                            <v-checkbox label="Activer les notifications SMS"></v-checkbox>
                            <v-text-field label="Numéro de téléphone des notifications" outlined></v-text-field>
                          </v-card-text>
                        </v-card>
                      </v-col>

                      <v-col cols="12">
                        <v-card elevation="2">
                          <v-card-title>
                            Administrateurs et utilisateurs
                          </v-card-title>
                          <v-card-text>
                           <v-data-table :headers="admin_headers" :items="users">

                           </v-data-table>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item
              :value="'mobile-tabs-5-' + 2"
            >
              <v-card flat>
                <v-card-text class="tw-mb-6 tw-space-y-8">
                    <v-row>
                      <v-col cols="12">
                        <v-card elevation="2">
                          <v-card-title>
                            Dernieres transactions
                          </v-card-title>
                          <v-card-text>
                            <v-data-table :headers="transaction_headers" :items="transactions">
                              <template v-slot:item.actions="{ item }">
                                <v-btn small>
                                  <v-icon color="green">
                                    mdi-eye
                                  </v-icon>
                                </v-btn>
                              </template>
                            </v-data-table>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item
              :value="'mobile-tabs-5-' + 3"
            >
              <v-card flat>
                <v-card-text class="tw-mb-6 tw-space-y-8">
                  <v-row>
                    <v-col cols="12">
                      <v-card elevation="2">
                        <v-card-title>
                          Finances
                        </v-card-title>
                        <v-card-text>
                         <v-form>
                           <v-text-field outlined label="Pourcentage sur les transactions" type="number"></v-text-field>
                           <v-select :items="stations_bus_frequences_virement" item-text="text" outlined label="Fréquence de virement des fonds"></v-select>
                           <v-select label="Jour de rappel des virements" :items="get_all_days" item-text="jour" outlined></v-select>
                         </v-form>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "settings",
  layout: "admin",
  computed: {
    get_all_days: function () {
      let arr = []
      for (let i=1; i<=30; i++)
        arr.push({ jour: i })

      return arr
    }
  },
  data(){
    return {
      tabs: null,
      admin_headers: [
        { text: '_', value: 'avatar' },
        { text: 'Nom', value: 'nom' },
        { text: 'Prénoms', value: 'prenoms' },
        { text: 'Email', value: 'email' },
        { text: 'Roles', value: 'roles' },
        { text: 'Permissions', value: 'permissions' },
        { text: 'Actions', value: 'actions' },
      ],
      transaction_headers: [
        { text: 'Date', value: 'date' },
        { text: 'Type d\'operation', value: 'type_operation' },
        { text: 'Service', value: 'user' },
        { text: 'Montant', value: 'montant' },
        { text: 'Actions', value: 'actions' },
      ],
      stations_bus_frequences_virement: [
        { text: 'Journalier' },
        { text: 'Hebdomadaire' },
        { text: 'Mensuel' }
      ],

      users: [],
      transactions: [
        { date: '30/08/2022', type_operation: 'Paiement ticket de bus', user: 'Alexis Yehadji', montant: '4000 FCFA' }
      ],
      breadcumb: [
        {
          text: 'Kara Events',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Parametres',
          disabled: true,
          href: 'breadcrumbs_link_1',
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>
