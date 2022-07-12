const { toCamel } = require("../helpers");

const { serializeAnswerOptionList } = require("./anwerOptions");

const serializeQuestion = function (question) {
  let questionJSON;
  try {
    questionJSON = question.toJSON();
  } catch (error) {
    questionJSON = question;
  }
  const questionFormatted = toCamel(questionJSON);
  const QuestionSchema = {
    id: questionFormatted.id,
    text: questionFormatted.text,
    category: questionFormatted.category,
    answerOptions: serializeAnswerOptionList(questionFormatted.answerOptions),
  };
  return QuestionSchema;
};

const serializeQuestionList = function (questions) {
  return questions.map((question) => serializeQuestion(question));
};

module.exports = {
  serializeQuestion,
  serializeQuestionList,
};
