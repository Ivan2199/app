const { toCamel } = require("../helpers");

const { serializeAnswerOptionList } = require("./anwerOptions");
const { serializeQuiz } = require("./quiz");

const serializeQuizResult = function (quizResult) {
  let quizResultJSON;
  try {
    quizResultJSON = quizResult.toJSON();
  } catch (error) {
    quizResultJSON = quizResult;
  }
  const quizResultFormatted = toCamel(quizResultJSON);
  const QuizResultSchema = {
    id: quizResultFormatted.id,
    startTime: quizResultFormatted.startTime,
    endTime: quizResultFormatted.endTime,
    score: quizResultFormatted.score,
    userAnswers: serializeAnswerOptionList(quizResultFormatted.answerOptions),
    quiz: serializeQuiz(quizResultFormatted.quiz),
  };
  return QuizResultSchema;
};

const serializeQuizResultList = function (quizResults) {
  return quizResults.map((quizResult) => serializeQuizResult(quizResult));
};

module.exports = {
  serializeQuizResult,
  serializeQuizResultList,
};
