<template>
  <div class="container">
    <img class="picture" src="../../../assets/Image02Road.png" />
    <h1>
      Prva<br />
      Pomoć
    </h1>
    <div class="BorderGlow">
      <article>
        <div
          v-for="question in questions.slice(a, b)"
          :key="question.id"
          class="question_answer"
          v-show="questionsStart"
        >
          <div v-if="question.category == 'PrvaPomoc'">
            <div class="box_question">
              <p>{{ x }}. {{ question.text }}</p>
            </div>
            <div class="box_suggestions">
              <ul>
                <button v-if="!hideButton" @click="displayAnswer()">
                  Prikaži Odgovor
                </button>
                <section v-if="showAnswer" class="question_image">
                  <video-embed v-bind:src="question.videoUrl"></video-embed>
                </section>
                <li
                  v-for="answer_option in question.answerOptions"
                  :key="answer_option.id"
                >
                  <div class="answer" v-if="showAnswer">
                    {{ answer_option.text }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="box-quizEnd" v-if="questionsEnd">
          <h1 class="theEnd">KRAJ!!</h1>
          <div class="restart-button">
            <button @click="restartQuestions">Restart</button>
          </div>
        </div>

        <div class="footer-quiz" v-if="!questionsEnd">
          <div class="box-button">
            <button
              @click="skipQuestion()"
              :style="!next ? 'background-color: rgb(106, 128, 202)' : ''"
            >
              Skip
            </button>
            <button
              @click="nextQuestion()"
              :style="next ? 'background-color: rgb(106, 128, 202)' : ''"
            >
              Next
            </button>
            <button
              @click="returnQuestion()"
              :style="returnQ ? 'background-color: rgb(106, 128, 202)' : ''"
            >
              Return
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Embed from 'v-video-embed'
export default {
  data() {
    return {
      questions: null,
      numberOfQuestions: 487,
      questionsStart: true,
      questionsEnd: false,
      next: false,
      returnQ: false,
      showAnswer: false,
      hideButton: false,
      a: 456,
      b: 457,
      x: 1
    }
  },
  mounted() {
    fetch('http://localhost:8081/questions/')
      .then((res) => res.json())
      .then((data) => (this.questions = data))
      .catch((err) => console.log(err.message))

    Vue.use(Embed)
  },
  methods: {
    nextQuestion() {
      if (!this.next) {
        return
      }
      if (this.b < this.numberOfQuestions) {
        this.a++
        this.b++
        this.x++
        this.next = false
        this.returnQ = true
        this.showAnswer = false
        this.hideButton = false
      } else {
        ;(this.questionsStart = false), (this.questionsEnd = true)
        this.showAnswer = false
        this.hideButton = false
      }
    },
    skipQuestion() {
      if (this.next) {
        return
      }
      if (this.b < this.numberOfQuestions) {
        this.a++
        this.b++
        this.x++
        this.returnQ = true
        this.showAnswer = false
        this.hideButton = false
      } else {
        ;(this.questionsStart = false), (this.questionsEnd = true)
        this.showAnswer = false
        this.hideButton = false
      }
    },
    returnQuestion() {
      if (this.a > 3) {
        this.a--
        this.b--
        this.x--
        this.showAnswer = false
        this.hideButton = false
      } else {
        this.a = 456
        this.b = 457
        this.x = 1
        this.returnQ = false
        this.showAnswer = false
        this.hideButton = false
      }
    },
    restartQuestions() {
      this.a = 456
      this.b = 457
      this.x = 1
      this.next = false
      this.questionsStart = true
      this.questionsEnd = false
      this.returnQ = false
      this.showAnswer = false
      this.hideButton = false
    },
    displayAnswer() {
      this.showAnswer = true
      this.next = true
      this.hideButton = true
    }
  }
}
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  left: 25%;
  transform: translate(-50%);
}

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
.question_answer {
  position: relative;
  vertical-align: middle;
  font-size: 30px;
  margin: 10px;
  padding: 10px;
  background: rgba(80, 79, 79, 0.444);
  border-radius: 25px;
}

.box_suggestions {
  display: flex;
  width: 100%;
  justify-content: center;
}

ul {
  display: flex;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: rgb(37, 37, 37);
  border-radius: 15px;
}
ul button:hover {
  transform: scale(0.7);
  background-color: #e7eae0;
  color: black;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
}

li {
  font-size: 20px;
  padding: 10px;
  justify-items: center;
  list-style: none;
  line-height: 2;
  margin: 10px;
  cursor: pointer;
}

.box-button {
  display: flex;
  width: 100%;
}

.footer-quiz .box-button button {
  position: relative;
  width: 150px;
  height: 35px;
  left: 24%;
  outline: none;
  border: 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: 10px;
  letter-spacing: 2px;
  background-color: #a09f9ff5;
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
h1 {
  color: #ffffff;
  font-size: 105px;
  font-weight: 500;
  position: absolute;
  top: 35%;
  left: 13%;
}
.theEnd {
  font-size: 70px;
  position: absolute;
  left: 40%;
  top: 38%;
}

.box-quizEnd {
  font-size: 50px;
}
.box_question {
  margin-bottom: 15px;
}
.restart-button {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 50px;
}

.restart-button button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  background-color: rgb(106, 128, 202);
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
.picture {
  position: fixed;
  top: 6%;
  left: -10%;
  overflow: hidden;
  opacity: 0.5;
}
.question_image {
  position: relative;
  max-width: 500px;
}
</style>
