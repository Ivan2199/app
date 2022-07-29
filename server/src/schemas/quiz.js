const { toCamel } = require("../helpers");
const { serializeQuestionList } = require("./question");

const serializeQuiz = function (quiz) {
  let quizJSON;
  try {
    quizJSON = quiz.toJSON();
  } catch (error) {
    quizJSON = quiz;
  }
  const quizFormatted = toCamel(quizJSON);
  const QuizSchema = {
    id: quizFormatted.id,
    title: quizFormatted.title,
    questions: serializeQuestionList(quizFormatted.questions),
  };
  return QuizSchema;
};

const serializeQuizList = function (quizzes) {
  return quizzes.map((quiz) => serializeQuiz(quiz));
};

module.exports = {
  serializeQuiz,
  serializeQuizList,
};
