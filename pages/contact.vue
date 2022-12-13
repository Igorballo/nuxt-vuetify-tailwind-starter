<template>
  <div>
    <div class="banner tw-bg-green-500 tw-bg-black tw-bg-cover tw-bg-center tw-p-12">
      <div class="tw-flex tw-items-center tw-justify-center tw-h-full">
        <h1
          class="tw-justify-center tw-py-12 tw-text-center tw-text-white tw-font-fond tw-text-2xl md:tw-text-4xl lg:tw-text-5xl tw-uppercase tw-font-extrabold tw-text-red-700 tw-mb-4 tw-uppercase">
          Contact</h1>

      </div>
    </div>

     
    
    <section class="tw-bg-white tw-text-center">
      <div class="tw-flex tw-justify-start">
        <div class="tw-w-full tw-relative">
          <p
            class="tw-text-xl tw-items-center md:tw-text-2xl lg:tw-text-2xl tw-uppercase tw-font-extrabold tw-text-red-700 tw-pt-10">
            Contactez - Nous
          </p>
          
        </div>
      </div>
    </section>
 
<v-card class="tw-px-4 tw-shadow-lg tw-relative tw-pb-8">
 <v-container fluid>
 <div class="tw-grid md:tw-grid-cols-2">
  <img class="tw-h-full tw-w-full tw-bg-cover tw-bg-center tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1573132223210-d65883b944aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
                   alt="">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="tw-px-8 tw-py-8 tw-w-full tw-h-full tw-gap-4 tw-bg-white"
  >
    <v-text-field
      v-model="form.name"
      :counter="10"
      :rules="nameRules"
      label="Nom Complet"
      required
      outlined
    ></v-text-field>

    <v-text-field
      v-model="form.email"
      :rules="emailRules"
      label="E-mail"
      required
      outlined
    ></v-text-field>
    <v-text-field
      v-model="form.number"
      :rules="numberRules"
      label="Numero de Telephone"
      outlined
      required
    ></v-text-field>

     <v-row>
      <v-col
        
      >
        <v-textarea
        outlined
        label="Message"
        required
        v-model="form.message"
        ></v-textarea>
      </v-col>
      </v-row>


    <v-btn
      color="primary"
      class="mr-4"
      @click="sendMessage"
      :loading="btnloading"
    >
      Send Message
    </v-btn>

  </v-form>
     </div>
      </v-container>
          </v-card>

  <div class="tw-pb-8 tw-shadow-lg">

  <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1015&amp;height=500&amp;hl=en&amp;q=Lomé&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://piratebay-proxys.com/">Piratebay</a></div><style>.mapouter{position:relative;text-align:center;width:100%;height:500px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:500px;}.gmap_iframe {width:100%!important;height:500px!important;}</style></div>


</div>
 

        
        

   
   

    
  


   

  </div>
</template>

<script>
export default {
  layout: 'master',

  data(){
    return {
      nameRules: [
        v => !!v || 'Le nom complet est requis',
      ],
      btnloading: false,
      emailRules: [
        v => !!v || 'Email est requis',
      ],
      numberRules: [
        v => !!v || 'Le Numero de Telephone est requis',
      ],
      form: {
        name: '',
        email: '',
        number: '',
        message: ''
      },
    }
  },

    methods: {
      async sendMessage() {
        this.btnloading = true;
      await axios.post('/contacts', this.form).then((response) => {
        this.showToast('success', 'Message envoyé avec succès')

        this.form = {
          name: '',
          email: '',
          number: '',
          message: ''
        },
        this.btnloading = false;

      }).catch(error => {
        console.log(error)
        this.showToast('error', 'Une erreur s\'est produite')
        this.btnloading = false;
      })

    }

    }
}
</script>

<style scoped>

.banner {
  background-image: url(https://images.unsplash.com/photo-1573132223210-d65883b944aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80);
  background-color: #000;
  background-size: center;
  opacity: 1;
  height: 30vh;
}

</style>
