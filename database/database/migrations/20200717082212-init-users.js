"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable(
      "users",
      {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        username: STRING(30),
        password: STRING(30),
        avatar: STRING(60),
        created_at: DATE,
        update_at: DATE,
        last_at: DATE,
      },
      {
        tableName: "users",
        charset: "utf8mb4",
        collate: "utf8mb4_bin",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
