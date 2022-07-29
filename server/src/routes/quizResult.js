const express = require("express");
const router = express.Router();

const QuizResultController = require("../controllers/QuizResultController");

router.post("/add", QuizResultController.createQuizResult);
router.get("/", QuizResultController.getQuizResults);

module.exports = router;
