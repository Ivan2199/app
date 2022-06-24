<template>
  <v-app id="inspire">
    <div>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <form name="tab-tracker-form" autocomplete="off">
                    <v-text-field label="Email" v-model="email"></v-text-field>
                    <br />
                    <v-text-field
                      label="Password"
                      type="password"
                      v-model="password"
                      autocomplete="new-password"
                    ></v-text-field>
                    <br />
                    <v-text-field
                      label="Name"
                      type="text"
                      v-model="name"
                    ></v-text-field>
                    <br />
                    <v-text-field
                      label="Surname"
                      type="text"
                      v-model="surname"
                    ></v-text-field>
                    <br />
                    <div class="danger-alert" v-html="error" />
                    <br />
                  </form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="register">Register</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import router from '@/router'
import AuthenticationServices from '@/services/AuthenticationServices'
export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
      surname: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationServices.register({
          email: this.email,
          password: this.password,
          name: this.name,
          surname: this.surname
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  setup() {
    router.push('/client2/src/views/LoginPage.vue')
  }
}
</script>

<style scoped>
#inspire {
  background: url(../assets/background_image.jpg);
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 0;
  overflow: hidden;
}
</style>
