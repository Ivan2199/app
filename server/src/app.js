const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user");
const { sequelize } = require("./models");
const config = require("./config/config");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRoutes);

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Server started on port ${config.port}`);
});
