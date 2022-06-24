<template>
  <div class="bg-con">
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h2 class="navbar-brand">Driving Education</h2>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link
                  v-if="!$store.state.isUserLoggedIn"
                  class="nav-link active"
                  :to="{ name: 'login' }"
                  >Home</router-link
                >
                <router-link
                  v-if="$store.state.isUserLoggedIn"
                  class="nav-link active"
                  :to="{ name: 'mainpage' }"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'about' }"
                  >About</router-link
                >
              </li>
            </ul>
            <form class="d-flex">
              <button
                v-if="!$store.state.isUserLoggedIn"
                class="btn btn-primary"
                type="submit"
              >
                <router-link class="nav-link" :to="{ name: 'login' }"
                  >Login</router-link
                >
              </button>
              <button
                v-if="!$store.state.isUserLoggedIn"
                class="btn btn-outline-primary"
                type="submit"
              >
                <router-link class="nav-link" :to="{ name: 'registration' }"
                  >Register</router-link
                >
              </button>
              <button
                v-if="$store.state.isUserLoggedIn"
                class="btn btn-outline-primary"
                type="submit"
                @click="logout"
              >
                Log Out
              </button>
            </form>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>
@import './assets/AppPageStyle.css';
</style>
