const bcrypt = require("bcrypt");

async function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  if (!user.changed("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(SALT_FACTOR);
  const hash = await bcrypt.hash(user.password, salt);
  user.setDataValue("password", hash);
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: hashPassword,
      },
    }
  );

  User.prototype.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  User.associate = function (models) {
  }

  return User
}
