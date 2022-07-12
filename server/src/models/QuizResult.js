module.exports = (sequelize, DataTypes) => {
  const QuizResult = sequelize.define(
    "QuizResult",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      quizId: {
        type: DataTypes.INTEGER,
      },
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      score: DataTypes.REAL,
    },
    {
      freezeTableName: true,
    }
  );

  QuizResult.associate = function (models) {
    QuizResult.belongsTo(models.User, {
      foreignKey: "userId",
    });
    QuizResult.belongsTo(models.Quiz, {
      foreignKey: "quizId",
    });
    QuizResult.belongsToMany(models.AnswerOption, {
      through: models.Answer,
      foreignKey: "quizResultId",
    });
  };

  return QuizResult;
};
