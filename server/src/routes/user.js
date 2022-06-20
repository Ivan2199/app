const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

const UserControllerPolicy = require("../policies/UserControllerPolicy")

router.post("/register", UserControllerPolicy.register, UserController.register);
router.post("/login", UserController.login);

module.exports = router;
