module.exports = (sequelize, DataTypes) => {
  const Quiz = sequelize.define(
    "Quiz",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: DataTypes.STRING,
    },
    {
      freezeTableName: true,
    }
  );

  Quiz.associate = function (models) {
    Quiz.hasMany(models.QuizResult, {
      foreignKey: "quizId",
    });
    Quiz.belongsToMany(models.Question, {
      through: models.QuestionQuiz,
      foreignKey: "quizId",
    });
  };

  return Quiz;
};
