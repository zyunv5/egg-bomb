"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define("user", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(30),
    password: STRING(30),
    avatar: STRING(60),
    created_at: DATE,
    update_at: DATE,
    last_at: DATE,
  });

  return User;
};
