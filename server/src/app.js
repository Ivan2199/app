const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const quizResultRoutes = require("./routes/quizResult");
const quizRoutes = require("./routes/quiz");
const userRoutes = require("./routes/user");
const questionRoutes = require("./routes/question");
const { sequelize } = require("./models");
const config = require("./config/config");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use("/quiz-result", quizResultRoutes);
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/quiz", quizRoutes);

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Server started on port ${config.port}`);
});
