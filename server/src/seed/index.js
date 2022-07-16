const { sequelize, User, Question } = require("../models");

const Promise = require("bluebird");
const questions = require("./questions.json");
const users = require("./users.json");

sequelize.sync({ force: true }).then(async function () {
  await Promise.all(
    users.map(async (user) => {
      User.create(user);
    })
  );

  await Promise.all(
    questions.map((question) => {
      Question.create(question);
    })
  );
});
