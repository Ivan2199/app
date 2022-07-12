module.exports = (sequelize, DataTypes) => {
  const AnswerOption = sequelize.define(
    "AnswerOption",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      questionId: {
        type: DataTypes.INTEGER,
      },
      text: {
        type: DataTypes.STRING,
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
    }
  );
  AnswerOption.associate = function (models) {
    AnswerOption.belongsTo(models.Question, {
      foreignKey: "questionId",
      onDelete: "cascade",
    });
    AnswerOption.belongsToMany(models.QuizResult, {
      through: models.Answer,
      foreignKey: "answerOptionId",
    });
  };

  return AnswerOption;
};
