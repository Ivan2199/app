const { sequelize } = require("../models");

const { createQuestion } = require("../services/QuestionService");
const { addQuiz } = require("../services/QuizService.js");
const { createUser } = require("../services/UserService.js");

const questions = require("./questions.json");
const quizzes = require("./quizzes.json");
const users = require("./users.json");

sequelize.sync({ force: true }).then(async function () {
  questions.map(async (question) => {
    await createQuestion(question);
  });
  quizzes.map(async (quiz) => {
    await addQuiz(quiz);
  });
  users.map(async (user) => {
    await createUser(user);
  });
});
