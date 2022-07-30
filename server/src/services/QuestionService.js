const { Question, AnswerOption } = require("../models");

async function createQuestion(questionParams, options) {
  const {
    id,
    imageUrl,
    scoreWorth,
    text,
    correctAnswers,
    videoUrl,
    category,
    answers,
  } = questionParams;

  const question = await Question.create(
    { id, imageUrl, scoreWorth, text, correctAnswers, videoUrl, category },
    options
  );

  answers.map(async (answer) => {
    const answerOption = await AnswerOption.create({
      questionId: question.id,
      text: answer.text,
      isCorrect: answer.isCorrect,
    });
    return answerOption;
  });

  await question.reload();
  return question;
}

async function fetchQuestion(id, options) {
  const question = await Question.findOne({
    where: {
      id: id,
    },
    ...options,
  });
  return question;
}

async function fetchAllQuestions(queryParams) {
  const questions = await Question.findAll(queryParams);
  return questions;
}

module.exports = {
  createQuestion,
  fetchQuestion,
  fetchAllQuestions,
};
