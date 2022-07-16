<template>
  <div class="container">
    <img class="picture" src="../../assets/Image02Road.png" />
    <h1>
      Propisi u&nbsp;&nbsp;&nbsp;<br />
      &nbsp;&nbsp;&nbsp;Cestovnom<br />
      Prometu&nbsp;&nbsp;&nbsp;
    </h1>
    <div class="BorderGlow">
      <article>
        <div
          v-for="(question, index) in sliceItems(0, 16)"
          :key="question.id"
          class="question_answer"
        >
          <div v-if="question.category == 'PropisiuCestovnomPrometu'">
            <div class="question">
              {{ index + 1 }}. {{ question.text }}
              <br />
              <img
                v-if="question.imageUrl"
                class="question_image"
                v-bind:src="question.imageUrl"
              />
            </div>

            <label
              v-for="answer_option in question.answerOptions"
              :key="answer_option.id"
              v-bind:class="True"
            >
              <button>
                {{ answer_option.text }}
                <span v-on:click="checkTrue(answer_option)">check</span>
              </button>
            </label>
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
      True: ''
    }
  },
  mounted() {
    fetch('http://localhost:8081/questions/')
      .then((res) => res.json())
      .then((data) => (this.questions = data))
      .catch((err) => console.log(err.message))
  },
  methods: {
    sliceItems: function (start, end) {
      return this.questions.slice(start, end)
    },
    checkTrue: function (value) {
      if (value.isCorrect == true) {
        this.True = 'True'
      } else {
        this.True = 'notTrue'
      }
    }
  }
}
</script>

<style scoped>
.myClass {
  background: green;
}
article {
  color: white;
  border-collapse: collapse;
  height: 89%;
  width: 41%;
  margin: 50px 10%;
  position: fixed;
  top: 48%;
  left: 68%;
  transform: translate(-50%, -50%);
  max-width: 2000px;
  max-height: 2000px;
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
  left: 78%;
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
  width: 42%;
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
  font-size: 30px;
  margin: 10px;
  padding: 10px;
  background: rgba(80, 79, 79, 0.444);
  border-radius: 25px;
}

.answer_options {
  background: rgb(37, 37, 37);
  max-height: 120px;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
  justify-items: center;
  transition: transform 0.5s;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
}

.answer_options:hover {
  transform: scale(1.1);
  z-index: 100;
  background: #1bff027a;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
  color: #ffffff;
  border-radius: 30px;
  opacity: 1;
  cursor: pointer;
}

.notTrue {
  background: rgb(37, 37, 37);
  max-height: 120px;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
  justify-items: center;
  transition: transform 0.5s;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
}

.notTrue:hover {
  transform: scale(1.1);
  z-index: 100;
  background: #1bff027a;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
  color: #ffffff;
  border-radius: 30px;
  opacity: 1;
  cursor: pointer;
}

.True {
  background: #1bff027a;
  max-height: 120px;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  justify-items: center;
  transition: transform 0.5s;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
}
.True:hover {
  transform: scale(1.1);
  z-index: 100;
  background: #1bff027a;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.835);
  color: #ffffff;
  border-radius: 30px;
  opacity: 1;
  cursor: pointer;
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
  font-size: 140px;
  font-weight: 700;
  position: absolute;
  top: 25%;
  left: 5%;
}
.question {
  margin-bottom: 15px;
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
