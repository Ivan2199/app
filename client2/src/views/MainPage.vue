<template>
  <div class="home">
    <img class="P1" alt="Driving_Test_Logo" src="../assets/Image01.jpg" />
    <img class="P2" alt="Driving_Test_Logo" src="../assets/Image01.jpg" />
    <img class="P3" alt="Driving_Test_Logo" src="../assets/Image01.jpg" />
    <img class="P4" alt="Driving_Test_Logo" src="../assets/Image01.jpg" />
    <img class="Road" alt="Road" src="../assets/Image02Road.png" />
    <img class="Car" alt="Car" src="../assets/Image03Car.png" />

    <div class="blurred-bg-container">
      <div class="content content2">
        <div class="profile-card">
          <img src="@/assets/avatar.png" alt="John Doe" />
          <h2 class="name">John Doe</h2>
          <p class="occupation">
            <i class="fas fa-map-marker"></i>
            UI/UX Designer
          </p>
          <a href="#" class="btn btn-outline">Following</a>
          <a href="#" class="btn btn-outline">Message</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style scoped>
@import '../assets/MainPageStyle.css';
</style>
