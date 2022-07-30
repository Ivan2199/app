const { User } = require("../models");

async function createUser(userParams) {
  const { email, password, name, surname, gender } = userParams;

  const user = await User.create({
    email,
    password,
    name,
    surname,
    gender,
  });
  return user;
}

async function fetchUser(options) {
  const user = await User.findOne(options);
  return user;
}

module.exports = {
  createUser,
  fetchUser,
};
