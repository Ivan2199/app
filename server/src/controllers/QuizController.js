const { Question, AnswerOption } = require("../models");
const { serializeQuiz, serializeQuizList } = require("../schemas/quiz");

const {
  addQuiz,
  fetchQuiz,
  fetchAllQuizzes,
} = require("../services/QuizService.js");

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

    const quiz = await addQuiz(
      { title, questions },
      { include: [{ model: Question, include: { model: AnswerOption } }] }
    );

    return res.status(201).json(serializeQuiz(quiz));
  },
  async getQuiz(req, res) {
    const { id } = req.params;

    const quiz = await fetchQuiz(id, {
      include: [{ model: Question, include: { model: AnswerOption } }],
    });

    if (!quiz) {
      return res.status(404).json({ message: `Quiz by ID ${id} not found!!` });
    }
    return res.status(200).json(serializeQuiz(quiz));
  },
  async getQuizzes(req, res) {
    const quizzes = await fetchAllQuizzes({
      include: [{ model: Question, include: { model: AnswerOption } }],
    });
    return res.status(200).json(serializeQuizList(quizzes));
  },
};
