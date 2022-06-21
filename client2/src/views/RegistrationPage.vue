<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div>
          <h1>Register</h1>
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email"
          />
          <br />
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password"
          />
          <br />
          <button @click="register">Register</button>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationServices from '@/services/AuthenticationServices'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationServices.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped></style>
