const express = require("express");
const router = express.Router();

const QuizController = require("../controllers/QuizController");

router.post("/add", QuizController.createQuiz);
router.get("/:id", QuizController.getQuiz);
router.get("/", QuizController.getQuizzes);

module.exports = router;
