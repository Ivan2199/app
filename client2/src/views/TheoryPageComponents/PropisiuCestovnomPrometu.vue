<template>
  <div class="container">
    <div v-for="question in questions" :key="question.id">
      {{ question.questionText }}
    </div>
  </div>
</template>

<script>
import QuestionService from '../../services/QuestionService'
export default {
  data() {
    return {
      questions: null
    }
  },
  async mounted() {
    this.questions = (await QuestionService.getQuestions()).data
  }
}
</script>

<style scoped>
div {
  background-color: brown;
  color: aliceblue;
}
</style>
