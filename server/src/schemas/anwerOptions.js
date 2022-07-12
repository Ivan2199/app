const { toCamel } = require("../helpers");

const serializeAnswerOption = function (answerOption) {
  let answerOptionJSON;
  try {
    answerOptionJSON = answerOption.toJSON();
  } catch (error) {
    answerOptionJSON = answerOption;
  }
  const answerOptionFormatted = toCamel(answerOptionJSON);
  const AnswerOptionSchema = {
    id: answerOptionFormatted.id,
    text: answerOptionFormatted.text,
    isCorrect: answerOptionFormatted.isCorrect,
  };
  return AnswerOptionSchema;
};

const serializeAnswerOptionList = function (answerOptions) {
  return answerOptions.map((answerOption) =>
    serializeAnswerOption(answerOption)
  );
};

module.exports = {
  serializeAnswerOption,
  serializeAnswerOptionList,
};
