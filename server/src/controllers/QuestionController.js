const { Question, AnswerOption } = require("../models");
const {
  serializeQuestion,
  serializeQuestionList,
} = require("../schemas/question");
// req.body
// req.query
// req.params

const allowedCategories = {
  PropisiuCestovnomPrometu: "PropisiuCestovnomPrometu",
  CestaiNjenaObiljezja: "CestaiNjenaObiljezja",
  PonasanjeSudionikauPrometu: "PonasanjeSudionikauPrometu",
  RoadSigns: "RoadSigns",
};

module.exports = {
  async addQuestion(req, res) {
    const { id, imageUrl, text, category, answers } = req.body;

    const categoryExists = Object.values(allowedCategories).find(
      (c) => c == category
    );
    if (!categoryExists) {
      return res
        .status(400)
        .json({ message: `You have sent a non-allowed category: ${category}` });
    }
    const question = await Question.create(
      { id, imageUrl, text, category },
      { include: AnswerOption }
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

    return res.status(201).json(serializeQuestion(question));
  },
  async getQuestion(req, res) {
    const { id } = req.params;

    const question = await Question.findOne({
      where: {
        id: id,
      },
      include: AnswerOption,
    });

    if (!question) {
      return res
        .status(404)
        .json({ message: `Question by ID ${id} not found` });
    }

    return res.status(200).json(serializeQuestion(question));
  },
  async getQuestions(req, res) {
    const { category } = req.query;
    const queryParams = {
      include: [AnswerOption],
      order: [[AnswerOption, "id", "ASC"]],
    };
    if (category) {
      queryParams.where = {
        category: category,
      };
    }
    const questions = await Question.findAll(queryParams);

    return res.status(200).json(serializeQuestionList(questions));
  },
  async deleteQuestion(req, res) {
    const { id } = req.params;
    const question = await Question.findByPk(id);
    if (!question) {
      return res
        .status(404)
        .json({ message: `Question by ID ${id} not found` });
    }
    await question.destroy();
    return res.status(200).json({ message: "question successfully deleted" });
  },
};
