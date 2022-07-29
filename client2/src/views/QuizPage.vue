<template>
  <div>
    <h1>Odaberi Kviz:</h1>
    <div class="container">
      <div class="box">
        <span></span>
        <div class="content">
          <h2>{{ quiz1.title }}</h2>
          <router-link class="quiz" :to="{ name: 'FirstQuiz' }"
            >Kreni</router-link
          >
        </div>
      </div>

      <div class="box">
        <span></span>
        <div class="content">
          <h2>{{ quiz2.title }}</h2>
          <router-link class="quiz" :to="{ name: 'SecondQuiz' }"
            >Kreni</router-link
          >
        </div>
      </div>

      <div class="box">
        <span></span>
        <div class="content">
          <h2>{{ quiz3.title }}</h2>
          <router-link class="quiz" :to="{ name: 'ThirdQuiz' }"
            >Kreni</router-link
          >
        </div>
      </div>

      <div class="box">
        <span></span>
        <div class="content">
          <h2>{{ quiz4.title }}</h2>
          <router-link class="quiz" :to="{ name: 'FourthQuiz' }"
            >Kreni</router-link
          >
        </div>
      </div>

      <div class="box">
        <span></span>
        <div class="content">
          <h2>{{ quiz5.title }}</h2>
          <router-link class="quiz" :to="{ name: 'FifthQuiz' }"
            >Kreni</router-link
          >
        </div>
      </div>

      <div class="box">
        <span></span>
        <div class="content">
          <h2>{{ quiz6.title }}</h2>
          <router-link class="quiz" :to="{ name: 'SixthQuiz' }"
            >Kreni</router-link
          >
        </div>
      </div>

      <div class="box">
        <span></span>
        <div class="content">
          <h2>{{ quiz7.title }}</h2>
          <router-link class="quiz" :to="{ name: 'SeventhQuiz' }"
            >Kreni</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      quiz1: null,
      quiz2: null,
      quiz3: null,
      quiz4: null,
      quiz5: null,
      quiz6: null,
      quiz7: null
    }
  },
  mounted: function () {
    axios
      .get('http://localhost:8081/quiz/1')
      .then((response) => (this.quiz1 = response.data))
      .catch((error) => console.log(error))
    axios
      .get('http://localhost:8081/quiz/2')
      .then((response) => (this.quiz2 = response.data))
      .catch((error) => console.log(error))
    axios
      .get('http://localhost:8081/quiz/3')
      .then((response) => (this.quiz3 = response.data))
      .catch((error) => console.log(error))
    axios
      .get('http://localhost:8081/quiz/4')
      .then((response) => (this.quiz4 = response.data))
      .catch((error) => console.log(error))
    axios
      .get('http://localhost:8081/quiz/5')
      .then((response) => (this.quiz5 = response.data))
      .catch((error) => console.log(error))
    axios
      .get('http://localhost:8081/quiz/6')
      .then((response) => (this.quiz6 = response.data))
      .catch((error) => console.log(error))
    axios
      .get('http://localhost:8081/quiz/7')
      .then((response) => (this.quiz7 = response.data))
      .catch((error) => console.log(error))
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  position: fixed;
  display: flex;
  top: 10%;
  left: 38%;
  color: white;
  font-size: 70px;
}

.container {
  overflow-y: scroll;
  position: absolute;
  display: flex;
  justify-content: center;
  background: rgba(141, 140, 140, 0.21);
  align-items: center;
  padding: 40px 0;
  flex-wrap: wrap;
  width: 70%;
  height: 75%;
  top: 20%;
  left: 15%;
  border-radius: 50px;
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

.container .box {
  position: relative;
  width: 200px;
  height: 100px;
  color: #fff;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 70px;
  margin-top: 40px;
  transition: 0.5s;
}
.container .box:hover {
  transform: translateY(-20px);
}

.container .box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg, #4dff03, #00d0ff);
}
.container .box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg, #4dff03, #00d0ff);
  filter: blur(30px);
}

.container .box:nth-child(2)::before,
.container .box:nth-child(2)::after {
  background: linear-gradient(315deg, #03a9f4, #ff0058);
}

.container .box:nth-child(3)::before,
.container .box:nth-child(3)::after {
  background: linear-gradient(315deg, #03a9f4, #ff0058);
}

.container .box:nth-child(4)::before,
.container .box:nth-child(4)::after {
  background: linear-gradient(315deg, #4dff03, #00d0ff);
}
.container .box:nth-child(5)::before,
.container .box:nth-child(5)::after {
  background: linear-gradient(315deg, #03a9f4, #ff0058);
}
.container .box:nth-child(6)::before,
.container .box:nth-child(6)::after {
  background: linear-gradient(315deg, #4dff03, #00d0ff);
}

.container .box:nth-child(7)::before,
.container .box:nth-child(7)::after {
  background: linear-gradient(315deg, #03a9f4, #ff0058);
}

.container .box span {
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
}

.container .box .content {
  position: relative;
  z-index: 10;
  padding: 20px 40px;
}

.container .box .content h2 {
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
}

.container .box .content .quiz {
  position: absolute;
  border-radius: 60%;
  left: 35%;
  font-size: 15px;
  color: #111;
  background: #fff;
  padding: 10px;
  text-decoration: none;
  font-weight: 400;
}
</style>
