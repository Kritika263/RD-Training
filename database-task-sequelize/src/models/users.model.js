module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      login: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    }
    // {
    //   timestamps: false,
    // }
  );
  return User;
};
