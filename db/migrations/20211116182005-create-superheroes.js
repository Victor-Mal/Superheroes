"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("superheroes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      nickname: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true,
      },
      realName: {
        type: Sequelize.STRING(64),
      },
      originDescription: {
        type: Sequelize.TEXT,
      },
      superpowers: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        unique: true,
      },
      catchPhrase: {
        type: Sequelize.STRING(128),
      },
      images: {
        type: Sequelize.STRING(512),
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("superheroes");
  },
};
