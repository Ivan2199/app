const express = require("express");
const router = express.Router();

const QuestionController = require("../controllers/QuestionController");

router.post("/add", QuestionController.addQuestion);
router.delete("/:id", QuestionController.deleteQuestion);
router.get("/:id", QuestionController.getQuestion);
router.get("/", QuestionController.getQuestions);

module.exports = router;
