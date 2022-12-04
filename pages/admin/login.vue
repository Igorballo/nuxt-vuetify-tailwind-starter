
<template>
  <v-app >
    <div class="tw-bg-cover tw-bg-center tw-h-full tw-bg-blue-500 tw-bg-opacity-80" style="background-image: url(https://images.unsplash.com/photo-1609408341205-861253559a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Connectez-vous</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form ref="form" @submit.prevent="login()">
                  <v-text-field
                    v-model="username"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Votre email"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Mot de passe"
                    type="password"
                    placeholder="Mot de passe"
                    required
                  ></v-text-field>
                  <v-btn type="submit" class="mt-4" color="primary" value="log in">Connexion</v-btn>
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
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const { username } = this;
      console.log(username + "logged in")
    },
  },
};
</script>
