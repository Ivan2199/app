<template>
  <div class="container">
    <img class="picture" src="../../../assets/Image02Road.png" />
    <h1>
      Naglo<br />
      Nastupajuća<br />
      Stanja
    </h1>
    <div class="BorderGlow">
      <article>
        <div
          v-for="(question, index) in sliceItems(16, 27)"
          :key="question.id"
          class="question_answer"
        >
          <div v-if="question.category == 'NagloNastupajucaStanja'">
            <div class="question">
              {{ index + 1 }}. {{ question.text }}
              <br />
              <img
                v-if="question.imageUrl"
                class="question_image"
                v-bind:src="question.imageUrl"
              />
            </div>
            <draggable>
              <span
                v-for="answer_option in question.answerOptions"
                :key="answer_option.id"
                class="answers"
              >
                <div v-if="answer_option.isCorrect" class="True">
                  {{ answer_option.text }}
                  <br />
                </div>
                <div v-else class="notTrue">
                  {{ answer_option.text }}
                  <br />
                </div>
              </span>
            </draggable>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data() {
    return {
      questions: null
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
.question_answer {
  font-size: 30px;
  margin: 10px;
  padding: 10px;
  background: rgba(80, 79, 79, 0.444);
  border-radius: 25px;
}
.notTrue {
  max-height: 120px;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
  justify-items: center;
}
.True {
  max-height: 120px;
  font-size: 20px;
  background-color: green;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  justify-items: center;
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
  font-size: 110px;
  font-weight: 500;
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
