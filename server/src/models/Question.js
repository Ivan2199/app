module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      videoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scoreWorth: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      correctAnswers: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  Question.associate = function (models) {
    Question.belongsToMany(models.Quiz, {
      through: models.QuestionQuiz,
      foreignKey: "questionId",
    });
    Question.hasMany(models.AnswerOption, {
      foreignKey: "questionId",
      onDelete: "cascade",
    });
  };

  return Question;
};
