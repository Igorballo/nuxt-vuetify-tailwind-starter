<template>
  <div>

    <div class="tw-m-4">
      <div class="tw-flex tw-justify-end tw-mb-2">
        <v-btn @click="showTopicForm =! showTopicForm" color="red" class="tw-text-white">Faire une publication</v-btn>
      </div>

      <v-card v-show="showTopicForm"
        elevation="2" class="tw-mb-8"
      >
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="topic.domaine"
              label="Domaine"
              required
              outlined
            ></v-text-field>
            <v-text-field
              v-model="topic.title"
              label="Titre de la publication"
              required
              outlined
            ></v-text-field>
            <v-textarea
              v-model="topic.description"
              outlined
              name="input-7-4"
              label="Description"
              value=""
            ></v-textarea>


            <v-btn color="red" class="tw-text-white tw-mt-4 tw-w-full">Publier cette article</v-btn>
          </v-form>
        </v-card-text>
      </v-card>


        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          item-key="name"
          class="elevation-1"
          :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
        ></v-data-table>
    </div>

  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      showTopicForm: false,
      topic: {
        domaine: "",
        title: "",
        description: "",
      },
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          value: 'name',
        },
        { text: 'Category', value: 'category' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          category: 'Ice cream',
        },
        {
          name: 'Ice cream sandwich',
          category: 'Ice cream',
        },
        {
          name: 'Eclair',
          category: 'Cookie',
        },
        {
          name: 'Cupcake',
          category: 'Pastry',
        },
      ],
    };
  },


  mounted(){
    this.getUser()
  },

  methods: {
    async getUser() {
      await axios.get('/users')
        .then(response => {
          console.log(response);
          this.users = response.data.docs;
        })
    },
  },
}
</script>

<style scoped>

</style>
