const {
  QuizResult,
  Answer,
  AnswerOption,
  Question,
  Quiz,
} = require("../models");

const {
  serializeQuizResult,
  serializeQuizResultList,
} = require("../schemas/quizResult");

//new Date().toISOString()

module.exports = {
  async createQuizResult(req, res) {
    const { userId, quizId, startTime, endTime, answers } = req.body;
    const quizResult = await QuizResult.create(
      {
        userId,
        quizId,
        startTime,
        endTime,
      },
      {
        include: [
          {
            model: AnswerOption,
            include: {
              model: Question,
            },
          },
          {
            model: Quiz,
            include: {
              model: Question,
              include: {
                model: AnswerOption,
              },
            },
          },
        ],
      }
    );
    answers.map(async (answer) => {
      const answerDB = await Answer.create({
        quizResultId: quizResult.id,
        answerOptionId: answer.id,
      });
      return answerDB;
    });
    await quizResult.reload();

    for (const question of quizResult.Quiz.Questions) {
      for (const answer of question.AnswerOptions) {
        console.log(answer.toJSON());
      }
    }

    const correctAnswers = quizResult.AnswerOptions.filter(
      (answer) => answer.isCorrect
    );

    const score = (correctAnswers.length / answers.length) * 100;

    await quizResult.update({ score });
    return res.status(201).json(serializeQuizResult(quizResult));
  },
};

// camel case = camelCase
// snake case = snake_case
