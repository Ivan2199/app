<template>
  <div class="container">
    <img class="picture" src="../../assets/Image02Road.png" />

    <article>
      <h2 class="dangerSignCategory">Znakovi Izričitih Naredbi</h2>
      <div
        v-for="dangerSign in sliceItems(34, 70)"
        :key="dangerSign.id"
        class="section"
      >
        <div v-if="dangerSign.category == 'ZnakoviIzricitihNaredbi'">
          <div class="dangerSign">
            <ul>
              <li>
                <img
                  v-if="dangerSign.imageUrl"
                  class="dangerSign_image"
                  v-bind:src="dangerSign.imageUrl"
                />
                <p class="DescriptionOfSign">
                  {{ dangerSign.text }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
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
  height: 80%;
  width: 66%;
  margin: 50px 10%;
  position: fixed;
  top: 48%;
  left: 43%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background: rgba(112, 108, 108, 0.842);
  overflow-y: scroll;
  z-index: 11;
  border-radius: 25px;
}

.dangerSign_image {
  position: relative;
  max-width: 300px;
  float: left;
  border-radius: 15px;
}
::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-thumb {
  background: lightgray;
  border-collapse: collapse;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.section {
  position: relative;
  vertical-align: middle;
  font-size: 30px;
  margin: 10px;
  padding: 10px;
  background: rgb(41, 40, 40);
  border-radius: 25px;
}

.dangerSign {
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
  list-style: none;
  flex-flow: column;
  justify-content: center;
}

li .DescriptionOfSign {
  width: 70%;
  background: rgb(37, 37, 37);
  font-size: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
  list-style: none;
  line-height: 2;
  border: 1px solid #cdd2d2;
  margin: auto;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
  float: right;
}
.picture {
  position: fixed;
  top: 6%;
  left: -10%;
  overflow: hidden;
  opacity: 0.5;
}
.dangerSignCategory {
  margin-top: -10px;
  margin-bottom: 20px;
}
</style>
