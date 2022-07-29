<template>
  <div class="container">
    <img class="picture" src="../../assets/Image02Road.png" />
    <div class="BorderGlow">
      <article>
        <div
          v-for="dangerSign in sliceItems(0, 2)"
          :key="dangerSign.id"
          class="section"
        >
          <div v-if="dangerSign.category == 'PropisiuCestovnomPrometu'">
            <img
              v-if="dangerSign.imageUrl"
              class="dangerSign_image"
              v-bind:src="dangerSign.imageUrl"
            />
            <div class="dangerSignText">
              <ul>
                <li>
                  {{ dangerSign.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      DangerSigns: null
    }
  },
  mounted: function () {
    axios
      .get('http://localhost:8081/sign/')
      .then((response) => (this.DangerSigns = response.data))
      .catch((error) => console.log(error))
  },
  methods: {
    sliceItems: function (start, end) {
      return this.DangerSigns.slice(start, end)
    }
  }
}
</script>

<style scoped>
article {
  display: block;
  color: white;
  border-collapse: collapse;
  height: 89%;
  width: 56%;
  margin: 50px 10%;
  position: fixed;
  top: 48%;
  left: 60%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background: rgb(41, 40, 40);
  overflow-y: scroll;
  z-index: 11;
  border-radius: 25px;
}
.BorderGlow::before,
.BorderGlow::after {
  content: '';
  position: fixed;
  top: 53.2%;
  left: 70%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    45deg,
    rgb(0, 174, 255),
    #0059ff,
    #1100ff,
    #580dd0,
    #8809ff,
    #6e0dd0,
    #c10cc7,
    #c10cc7,
    #6e0dd0,
    #8809ff,
    #580dd0,
    #1100ff,
    #0059ff,
    rgb(0, 174, 255)
  );
  background-size: 400%;
  width: 57%;
  height: 90.5%;
  border-radius: 25px;
  z-index: 10;
  animation: animate 70s linear infinite;
}
@keyframes animate {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.BorderGlow::after {
  filter: blur(40px);
}
.section {
  position: relative;
  vertical-align: middle;
  font-size: 30px;
  margin: 10px;
  padding: 10px;
  background: rgba(80, 79, 79, 0.444);
  border-radius: 25px;
}

.dangerSignText {
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
}

ul {
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}

li {
  background: rgb(37, 37, 37);
  font-size: 20px;
  padding: 10px;
  justify-items: center;
  transition: transform 0.5s;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
  list-style: none;
  line-height: 2;
  border: 1px solid #cdd2d2;
  margin: 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
}
.picture {
  position: fixed;
  top: 6%;
  left: -10%;
  overflow: hidden;
  opacity: 0.5;
}
.dangerSign_image {
  position: relative;
  max-width: 500px;
}
</style>
