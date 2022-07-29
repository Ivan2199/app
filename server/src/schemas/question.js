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
    imageUrl: questionFormatted.imageUrl,
    text: questionFormatted.text,
    category: questionFormatted.category,
    scoreWorth: questionFormatted.scoreWorth,
    correctAnswers: questionFormatted.correctAnswers,
    videoUrl: questionFormatted.videoUrl,
    answerOptions: serializeAnswerOptionList(questionFormatted.answerOptions),
  };
  if (questionFormatted.answerOptions) {
    QuestionSchema.answerOptions = serializeAnswerOptionList(
      questionFormatted.answerOptions
    );
  }
  if (questionFormatted.questionQuiz) {
    QuestionSchema.sequenceNumber =
      questionFormatted.questionQuiz.sequenceNumber;
  }
  return QuestionSchema;
};

const serializeQuestionList = function (questions) {
  return questions.map((question) => serializeQuestion(question));
};

module.exports = {
  serializeQuestion,
  serializeQuestionList,
};
