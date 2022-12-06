<template>
  <v-app>
    <div class="tw-bg-cover tw-bg-center tw-h-full tw-bg-blue-500 tw-bg-opacity-80"
         style="background-image: url(https://images.unsplash.com/photo-1609408341205-861253559a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12" height="500">
              <v-toolbar dark color="primary">
                <v-toolbar-title>
                  Connectez-vous
                </v-toolbar-title>
                <v-spacer/>
                <v-toolbar-items>
                  <v-icon>mdi-login</v-icon>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <form class="mt-5" ref="form" @submit.prevent="login()">
                  <v-alert color="red darken-1" dark dismissible border="top" elevation="1" transition="all"
                           align="center" v-if="errorMsg">{{ getFormattedMessage }}
                  </v-alert>
                  <v-text-field
                    v-model="email"
                    name="email"
                    label="Email"
                    type="email"
                    outlined
                    placeholder="Votre email"
                    solo
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Mot de passe"
                    type="password"
                    outlined
                    solo
                    placeholder="Mot de passe"
                    required
                  ></v-text-field>
                  <v-btn :loading="loginInProgress" type="submit" class="mt-4" color="primary" block>Connexion</v-btn>
                </form>
              </v-card-text>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginInProgress: false,
      email: "",
      password: "",
      errorMsg: null,
    };
  },
  computed: {
    getFormattedMessage() {
      if (this.errorMsg === 'USER_DOES_NOT_EXIST' || this.errorMsg === 'WRONG_PASSWORD')
        return "Invalid Credentials"

      return "Unknow error"
    }
  },
  methods: {
    async login() {
      this.errorMsg = null
      this.loginInProgress = true
      const response = await axios.post("/login", {email: this.email, password: this.password})
        .then(res => res.data)
        .catch(error => error.response)

      console.log("this is the response")
      console.log(response)
      this.loginInProgress = false

      if (response.data?.errors) {
        this.errorMsg = response.data.errors.msg
        return
      }

      await this.$store.dispatch('auth/saveToken', {
        token: response.token,
        user: response.user
      })

      this.$router.replace('/admin/dashboard')



    },
  },
};
</script>
