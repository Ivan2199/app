module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    "Answer",
    {
      quizResultId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      answerOptionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Answer;
};
