<template>
  <div>

  </div>
</template>

<script>
const MODAL_WIDTH = 656

export default {

  data() {
    return {
      isOpen: false,
      modalWidth: MODAL_WIDTH,

      loading: {
        login: false,
        register: false
      },

      auth: {
        email: "",
        password: ""
      },
      form: {
        is_society: true,
        nom: "",
        prenom: "",
        email: "",
        raison_social: "",
        domaine_activite: "",
        telephone: "",
        adresse: "",
        password: "",
        password_confirmation: "",
      }
    };
  },

  methods: {
    async registerAccount() {
      this.loading.register = true
      await this.axios.post('auth/register', this.form).then(
        this.loading.register = false,
      ).catch(error => {
        this.loading.register = false
        console.log(error)
      })
    },
    loginAccount() {
      this.loading.login = true
      // await this.$axios.post('/api/auth/login', this.auth).then(
      //   console.log("cool")
      // ).catch(error => {
      //   console.log(error)
      // })

    },
    drawer() {
      this.isOpen = !this.isOpen;
    },
    signIn() {
      alert('Sign in')
    },
    register() {
      alert('Register')
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "tw-hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
      this.$modal.show('example')
    });
  }
};
</script>

<style scoped>
.hover {
  --c: linear-gradient(#000 0 0);
  /* update the color here */

  padding-bottom: 0.6em;
  background: var(--c), var(--c);
  background-size: 0.3em 0.1em;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  tw-transition: 0.3s linear, background-size 0.3s 0.2s linear;
}

.hover:hover {
  background-size: 40% 0.1em;
  background-position: 10% 100%, 90% 100%;
}

.button-set {
  margin-bottom: 8px;
}

#register-btn,
#signin-btn {
  margin-left: 8px;
}

.autocomplete-fix {
  position: absolute;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
}

.pop-out-enter-active,
.pop-out-leave-active {
  tw-transition: all 0.5s;
}

.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  tw-transform: translateY(24px);
}
</style>
