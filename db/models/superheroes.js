"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superheroes extends Model {
    static associate(models) {}
  }
  Superheroes.init(
    {
      nickname: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 64],
          notEmpty: true,
        },
      },
      realName: {
        type: DataTypes.STRING(64),
        unique: true,
        validate: {},
      },
      originDescription: {
        type: DataTypes.TEXT,
        validate: {},
      },
      superpowers: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        validate: {},
      },
      catchPhrase: {
        type: DataTypes.STRING(128),
        unique: true,
        validate: {},
      },
      images: {
        type: DataTypes.STRING(512),
        validate: {},
      },
    },
    {
      sequelize,
      modelName: "Superheroes",
      tableName: "superheroes",
      underscored: true,
    }
  );
  return Superheroes;
};
