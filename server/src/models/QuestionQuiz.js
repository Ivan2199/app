module.exports = (sequelize, DataTypes) => {
  const QuestionQuiz = sequelize.define(
    "QuestionQuiz",
    {
      quizId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      questionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      sequenceNumber: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return QuestionQuiz;
};
