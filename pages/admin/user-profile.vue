<template>
  <v-container>
     <v-card max-width="800px">
    <h1 class="tw-p-4 tw-text-2xl tw-font-bold">
     Parametrages de l'Utilisateur
    </h1>

    <form class="tw-p-4">
    <v-text-field
      class="tw-p-4 tw-text-2xl tw-font-bold"
      v-model="oldPassword"
      :error-messages="oldErrors"
      :counter="10"
      label="Actuel Mot de Passe"
      required
      @input="$v.oldPassword.$touch()"
      @blur="$v.oldPassword.$touch()"
    ></v-text-field>
    <v-text-field
      class="tw-p-4 tw-text-2xl tw-font-bold"
      v-model="newPassword"
      :error-messages="newErrors"
      label="Nouveau Mot de Passe"
      required
      :counter="10"
      @input="$v.newPassword.$touch()"
      @blur="$v.newPassword.$touch()"
    ></v-text-field>
     <v-text-field
      class="tw-p-4 tw-text-2xl tw-font-bold"
      v-model="confirmPassword"
      :error-messages="confirmErrors"
      label="Confirmer le Mot de Passe"
      required
      :counter="10"
      @input="$v.confirmPassword.$touch()"
      @blur="$v.confirmPassword.$touch()"
    ></v-text-field>
   <v-spacer></v-spacer>
    <v-btn
      class="p-4 primary"
      @click="submit"
    >
      Enregistrer
    </v-btn>
    
  </form>
</v-card>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
     layout: 'admin',
    mixins: [validationMixin],
    validations: {
      oldPassword: { required, maxLength: maxLength(10) },
      newPassword: { required, maxLength: maxLength(10) },
      confirmPassword: { required, maxLength: maxLength(10) }
    },

    data: () => ({
     btnloading: false,
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }),

    computed: {
      oldErrors () {
        const errors = []
        if (!this.$v.oldPassword.$dirty) return errors
        !this.$v.oldPassword.maxLength && errors.push('The Old Password must be at most 10 characters long')
        !this.$v.oldPassword.required && errors.push('The Old Password is required.')
        return errors
      },
      newErrors () {
        const errors = []
        if (!this.$v.newPassword.$dirty) return errors
        !this.$v.newPassword.maxLength && errors.push('The New Password must be at most 10 characters long')
        !this.$v.newPassword.required && errors.push('The New Password is required.')
        return errors
      },
       confirmErrors () {
        const errors = []
        if (!this.$v.confirmPassword.$dirty) return errors
        !this.$v.confirmPassword.maxLength && errors.push('The Confirm Password must be at most 10 characters long')
        !this.$v.confirmPassword.required && errors.push('The Confirm Password is required.')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
        axios.patch('/profile/change-password/' + this._id, {oldPassword: this.oldPassword, newPassword: this.newPassword, confirmPassword: this.confirmPassword})
        .then(response => {
          console.log(response);
          this.oldPassword= '',
          this.newPassword= '',
          this.confirmPassword= ''
          
        }).catch(error => {

          return false
          console.log(error)
        })
      },
     
    },
  }
</script>
