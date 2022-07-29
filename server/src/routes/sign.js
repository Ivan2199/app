const express = require("express");
const router = express.Router();

const SignController = require("../controllers/SignController");

router.post("/add", SignController.addSign);
router.delete("/:id", SignController.deleteSign);
router.get("/:id", SignController.getSign);
router.get("/", SignController.getSigns);

module.exports = router;
