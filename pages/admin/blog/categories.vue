<template>
  <div>
    <v-row class="mx-4 mt-4 fill-height">
      <v-card elevation="2" width="100%">
        <v-card-title class="tw-mb-6">
          <h1 class="text-h4 text-dark">Toutes les catégories</h1>
          <v-spacer/>

          <v-row justify="end">
            <v-btn @click="category_modal = true" large v-bind="attrs" v-on="on" color="accent"
                   class="tw-py-2 tw-rounded-full">
              <v-icon size="25" color="white">
                mdi-calendar
              </v-icon>
              <v-spacer/>
              <span class="mx-2">Nouvelle catégorie</span>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-data-table
            dense
            :loading="isLoading"
            :headers="headers"
            :items="categories"
            item-key="name"
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <div class="">
                <v-btn
                  class="ma-2"
                  outlined
                  small
                  fab
                  color="teal"
                >
                  <v-icon>mdi-cog-outline</v-icon>
                </v-btn>
                <v-btn
                  @click="handleEditCategory(item)"
                  class="ma-2"
                  outlined
                  small
                  fab
                  color="indigo"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                  @click="deleteCategory(item)"
                  class="ma-2"
                  outlined
                  small
                  fab
                  color="red"
                >
                  <v-icon>mdi-delete-empty</v-icon>
                </v-btn>
              </div>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-row>

    <v-dialog v-model="category_modal" width="400">
      <v-card width="100%">
        <v-card-title>
          Nouvelle catégorie
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Libellé" outlined/>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="category_modal = false">
            Annuler
          </v-btn>
          <v-btn v-if="!isEditing" :loading="submitting_category" color="accent darken-1" @click="saveCategory()">
            Ajouter
          </v-btn>
          <v-btn v-if="isEditing" :loading="submitting_category" color="accent darken-1" text @click="update">
            Mettre à Jour
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "categories",
  layout: "admin",
  data() {
    return {
      isEditing: false,
      submitting_category: false,
      category_modal: false,
      categories: [],
      headers: [
        {text: "Libellé", value: "libelle"},
        {text: "active", value: "active"},
      ]
    }
  }
}
</script>

<style scoped>

</style>
