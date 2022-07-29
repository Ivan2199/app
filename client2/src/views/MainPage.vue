<template>
  <div class="home">
    <img class="P1" alt="Driving_Test_Logo" src="../assets/Image01.jpg" />
    <img class="P2" alt="Driving_Test_Logo" src="../assets/Image01.jpg" />
    <img class="P3" alt="Driving_Test_Logo" src="../assets/Image01.jpg" />
    <img class="P4" alt="Driving_Test_Logo" src="../assets/Image01.jpg" />
    <img class="Road" alt="Road" src="../assets/Image02Road.png" />

    <div class="blurred-bg-container">
      <div class="content content2">
        <div class="profile-card">
          <img src="@/assets/avatar.png" alt="John Doe" />
          <div v-if="error">There's been an error</div>
          <div v-else>
            <h2>Bok {{ name }}</h2>
          </div>
          <router-link class="btn2 btn2-out" :to="{ name: 'ProfilePage' }"
            >Profil</router-link
          >
        </div>
      </div>
    </div>

    <div class="container">
      <input type="checkbox" id="check" />
      <label class="show_button" for="check">Teorija</label>
      <div class="background"></div>
      <div class="alert_box">
        <div class="icon">
          <img src="../assets/avatar.png" />
        </div>
        <header>Teorija</header>
        <p>Prometni propisi i sigurnosna pravila</p>
        <p>Prva pomoć</p>
        <div>
          <router-link class="button GoButton" :to="{ name: 'theory' }"
            >Idemo</router-link
          >
          <label class="button OutButton" for="check">Izlaz</label>
        </div>
      </div>
    </div>

    <div class="container1">
      <input type="checkbox" id="check1" />
      <label class="show_button1" for="check1">Pitanja</label>
      <div class="background1"></div>
      <div class="alert_box1">
        <div class="icon1">
          <img src="../assets/avatar.png" />
        </div>
        <header>Pitanja</header>
        <p>Prometni propisi i sigurnosna pravila</p>
        <p>Prva pomoć</p>
        <div>
          <router-link class="button GoButton" :to="{ name: 'QuestionPage' }"
            >Idemo</router-link
          >
          <label class="button OutButton" for="check1">Izlaz</label>
        </div>
      </div>
    </div>

    <div class="container2">
      <input type="checkbox" id="check2" />
      <label class="show_button2" for="check2">Kviz</label>
      <div class="background2"></div>
      <div class="alert_box2">
        <div class="icon2">
          <img src="../assets/avatar.png" />
        </div>
        <header>Kviz</header>
        <div>
          <router-link class="button GoButton" :to="{ name: 'QuizPage' }"
            >Idemo</router-link
          >
          <label class="button OutButton" for="check2">Izlaz</label>
        </div>
      </div>
    </div>

    <div class="container3">
      <input type="checkbox" id="check3" />
      <label class="show_button3" for="check3">Znakovi</label>
      <div class="background3"></div>
      <div class="alert_box3">
        <div class="icon3">
          <img src="../assets/avatar.png" />
        </div>
        <div class="signElements">
          <header>Znakovi</header>
          <p>Znakovi Opasnosti</p>
          <p>Znakovi Izričitih Naredbi</p>
          <p>Znakovi Obavijesti</p>
          <p>Znakovi Za Vođenje Prometa</p>
        </div>
        <div>
          <router-link class="button GoButton" :to="{ name: 'RoadSign' }"
            >Idemo</router-link
          >
          <label class="button OutButton" for="check3">Izlaz</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AuthenticationServices from '@/services/AuthenticationServices'

export default {
  data() {
    return {
      name: '',
      error: false
    }
  },
  async mounted() {
    this.name = this.$store.state.user.name
  }
}
</script>

<style scoped>
@import '../assets/MainPageStyle.css';
</style>
