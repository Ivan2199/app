const {
  sequelize,
  Question,
  AnswerOption,
  Quiz,
  QuestionQuiz,
} = require("../models");

const Promise = require("bluebird");
const questions = require("./questions.json");
const answerOptions = require("./answerOptions.json");
const quizzes = require("./quizzes.json");
const questionQuizzes = require("./questionQuizzes.json");

sequelize.sync({ force: true }).then(async function () {
  await Promise.all(
    questions.map((question) => {
      Question.create(question);
    })
  );
  await Promise.all(
    answerOptions.map((answerOption) => {
      AnswerOption.create(answerOption);
    })
  );
  await Promise.all(
    quizzes.map((quiz) => {
      Quiz.create(quiz);
    })
  );
  await Promise.all(
    questionQuizzes.map((questionQuiz) => {
      QuestionQuiz.create(questionQuiz);
    })
  );
});
