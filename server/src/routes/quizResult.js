const express = require("express");
const router = express.Router();

const QuizResultController = require("../controllers/QuizResultController");

router.post("/add", QuizResultController.createQuizResult);

module.exports = router;
