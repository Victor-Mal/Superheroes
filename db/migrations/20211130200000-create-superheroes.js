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
        field: "real_name",
        type: Sequelize.STRING(64),
        unique: true,
      },
      originDescription: {
        field: "origin_description",
        type: Sequelize.TEXT,
      },
      superpowersId: {
        field: "superpowers_id",
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "superpowers",
            schema: "public",
          },
          key: "id",
        },
      },
      catchPhrase: {
        field: "catch_phrase",
        type: Sequelize.STRING(128),
        unique: true,
      },
      images: {
        type: Sequelize.STRING(512),
      },

      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("superheroes");
  },
};
