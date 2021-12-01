"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    static associate(models) {

    }
  }
  Superhero.init(
    {
      nickname: {
        type: DataTypes.STRING(64),
        allowNull:false,
        unique: true,
        validate: {
          len: [3, 64],
          notEmpty: true,
          notNull: true,
        },
      },
      realName: {
        field: "real_name",
        type: DataTypes.STRING(64),
        unique: true,
        validate: {},
      },
      originDescription: {
        field: "origin_description",
        type: DataTypes.TEXT,
        allowNull:false,
        validate: { 
          notEmpty: true, 
          notNull: true 
        },
      },
      superpowersId: {
        field: "superpowers_id",
        type: DataTypes.INTEGER,
        references: {  model: {
          tableName: "superpowers",
          schema: "public",
        }, key: "id" },
      },
      catchPhrase: {
        field: "catch_phrase",
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
      modelName: "Superhero",
      tableName: "superheroes",
      underscored: true,
    }
  );
  return Superhero;
};
