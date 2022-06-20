<template>
  <div>
    <h1>Login</h1>
    <input type="email" name="email" v-model="email" placeholder="email" />
    <br />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    />
    <br />
    <div class="error" v-html="error"></div>
    <button @click="login">Login</button>
  </div>
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
        await AuthenticationServices.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
