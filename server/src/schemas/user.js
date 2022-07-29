const { toCamel } = require("../helpers");

const serializeUser = function (user) {
  let userJSON;
  try {
    userJSON = user.toJSON();
  } catch (error) {
    userJSON = user;
  }
  const userFormatted = toCamel(userJSON);
  const UserSchema = {
    id: userFormatted.id,
    email: userFormatted.email,
    name: userFormatted.name,
    surname: userFormatted.surname,
    gender: userFormatted.gender,
  };
  return UserSchema;
};

module.exports = {
  serializeUser,
};
