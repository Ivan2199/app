const { Quiz, QuestionQuiz, Question, AnswerOption } = require("../models");
const { serializeQuiz, serializeQuizList } = require("../schemas/quiz");

module.exports = {
  async createQuiz(req, res) {
    const { title, questions } = req.body;

    for (const question of questions) {
      const questionDb = await Question.findByPk(question.id);
      if (!questionDb) {
        return res.status(404).json({
          message: `The question with ID ${question.id} doesn't exist in the DB`,
        });
      }
    }

    const quiz = await Quiz.create(
      { title },
      { include: [{ model: Question, include: { model: AnswerOption } }] }
    );

    questions.map(async (question) => {
      const questionQuiz = await QuestionQuiz.create({
        quizId: quiz.id,
        questionId: question.id,
        sequenceNumber: question.sequenceNumber,
      });
      return questionQuiz;
    });

    await quiz.reload();

    return res.status(201).json(serializeQuiz(quiz));
  },
  async getQuiz(req, res) {
    const { id } = req.params;

    const quiz = await Quiz.findByPk(id, {
      include: [{ model: Question, include: { model: AnswerOption } }],
    });
    if (!quiz) {
      return res.status(404).json({ message: `Quiz by ID ${id} not found!!` });
    }
    return res.status(200).json(serializeQuiz(quiz));
  },
  async getQuizzes(req, res) {
    const quizzes = await Quiz.findAll({
      include: [{ model: Question, include: { model: AnswerOption } }],
    });
    return res.status(200).json(serializeQuizList(quizzes));
  },
};
