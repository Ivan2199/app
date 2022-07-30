<template>
  <div class="container">
    <img class="picture" src="../../assets/Image02Road.png" />
    <h1>
      Propisi u<br />
      Cestovnom<br />
      Prometu
    </h1>
    <div class="BorderGlow">
      <article>
        <div
          v-for="question in questions.slice(a, b)"
          :key="question.id"
          class="question_answer"
          v-show="questionsStart"
        >
          <div v-if="question.category == 'PropisiuCestovnomPrometu'">
            <div class="box_question">
              <p>{{ questionCounter }}. {{ question.text }}</p>
              <img
                v-if="question.imageUrl"
                class="question_image"
                v-bind:src="question.imageUrl"
              />
            </div>
            <div class="box_suggestions">
              <ul>
                <li
                  v-for="answer_option in question.answerOptions"
                  :key="answer_option.id"
                  :class="select ? check(answer_option) : ''"
                >
                  <p @click="selectResponse(answer_option, question)">
                    {{ answer_option.text }}
                  </p>
                </li>
                <button v-if="checked" @click="CorrectOrNot(question)">
                  Provjeri
                </button>
              </ul>
            </div>
          </div>
        </div>

        <div class="box-quizEnd" v-if="questionsEnd">
          <h1 class="theEnd">KRAJ!!</h1>
          <h2>Broj točnih odgovora:</h2>
          <h2>{{ this.score }}/{{ this.currentNumberOfQuestions }}</h2>
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
              @click="returnQuestion"
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
export default {
  data() {
    return {
      questions: null,
      answers: [],
      numberOfQuestions: 38,
      questionsStart: true,
      questionsEnd: false,
      select: false,
      score: 0,
      next: false,
      returnQ: false,
      correctAnswers: 0,
      answerCounter: 0,
      counter: 1,
      checked: true,
      questionCounter: 1,
      currentNumberOfQuestions: 0,
      a: 1,
      b: 2
    }
  },
  mounted() {
    fetch('http://localhost:8081/questions/')
      .then((res) => res.json())
      .then((data) => (this.questions = data))
      .catch((err) => console.log(err.message))
  },
  methods: {
    CorrectOrNot() {
      if (this.answers.length == this.correctAnswers) {
        for (this.answer in this.answers) {
          alert(this.answer)
        }
        this.select = true
        this.score += 1
        this.next = true
        this.checked = false
      } else if (this.answers.length != this.correctAnswers) {
        this.select = true
        this.next = true
      }
    },
    selectResponse(answer, question) {
      this.correctAnswers = question.correctAnswers
      if (answer.isCorrect) {
        this.answers.push(answer.id)
      } else if (!answer.isCorrect) {
        this.next = true
        this.select = true
        this.checked = false
      }
    },
    check(status) {
      if (status.isCorrect) {
        return 'correct'
      } else {
        return 'incorrect'
      }
    },
    nextQuestion() {
      if (!this.next) {
        return
      }
      if (this.b < this.numberOfQuestions) {
        this.a++
        this.b++
        this.questionCounter++
        this.select = false
        this.next = false
        this.returnQ = true
        this.answers = []
        this.checked = true
      } else {
        ;(this.questionsStart = false), (this.questionsEnd = true)
        this.answers = []
        this.currentNumberOfQuestions = this.questionCounter
      }
    },
    skipQuestion() {
      if (this.next) {
        return
      }
      if (this.b < this.numberOfQuestions) {
        this.a++
        this.b++
        this.questionCounter++
        this.select = false
        this.returnQ = true
        this.answers = []
        this.checked = true
      } else {
        ;(this.questionsStart = false), (this.questionsEnd = true)
        this.answers = []
        this.currentNumberOfQuestions = this.questionCounter
      }
    },
    returnQuestion() {
      if (this.a > 1) {
        this.a--
        this.b--
        this.score--
        this.questionCounter--
      } else {
        this.a = 1
        this.b = 2
        this.returnQ = false
      }
    },
    restartQuestions() {
      this.a = 1
      this.b = 2
      this.questionCounter = 1
      this.score = 0
      this.next = false
      this.select = false
      this.questionsStart = true
      this.questionsEnd = false
      this.returnQ = false
      this.answers = []
      this.checked = true
      this.currentNumberOfQuestions = 0
    }
  }
}
</script>

<style scoped>
li p:hover {
  color: black;
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

li:hover {
  transform: scale(1.1);
  background-color: #e7eae0;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
}

li.correct {
  border: 1px solid rgb(74, 219, 74);
  background-color: rgb(74, 219, 74);
  color: white;
  font-weight: 600;
}

li.incorrect {
  border: 1px solid rgb(240, 117, 100);
  background-color: rgb(240, 117, 100);
  color: white;
  font-weight: 600;
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
  font-size: 120px;
  font-weight: 500;
  position: absolute;
  top: 25%;
  left: 5%;
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
