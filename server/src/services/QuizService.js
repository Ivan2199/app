const { Quiz, QuestionQuiz } = require("../models");

async function addQuiz(quizParams, options) {
  const { title, questions } = quizParams;

  const quiz = await Quiz.create({ title }, options);

  questions.map(async (question) => {
    const questionQuiz = await QuestionQuiz.create({
      quizId: quiz.id,
      questionId: question.id,
      sequenceNumber: question.sequenceNumber,
    });
    return questionQuiz;
  });

  await quiz.reload();
  return quiz;
}

async function fetchQuiz(id, options) {
  const quiz = await Quiz.findByPk(id, options);
  return quiz;
}

async function fetchAllQuizzes(queryParams) {
  const quizzes = await Quiz.findAll(queryParams);
  return quizzes;
}

module.exports = {
  addQuiz,
  fetchQuiz,
  fetchAllQuizzes,
};
