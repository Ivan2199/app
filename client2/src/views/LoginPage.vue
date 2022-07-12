<template>
  <v-app id="inspire">
    <div>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login</v-toolbar-title>
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
                  </form>
                  <br />
                  <div class="danger-alert" v-html="error" />
                  <br />
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login">Login</v-btn>
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
import AuthenticationServices from '@/services/AuthenticationServices'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationServices.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'mainpage'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
#inspire {
  background: url('../assets/BetterOne.jpg');
}
</style>
