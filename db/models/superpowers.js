"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superpowers extends Model {
    
    static associate(models) {
    }
  }
 
  Superpowers.init(
    {
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate: { 
          notEmpty: true, 
          notNull: true 
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { 
          notEmpty: true, 
          notNull: true 
        },
      },
    },
    {
      sequelize,
      modelName: "Superpowers",
      tableName: "superpowers",
      underscored: true,
    }
  );
  return Superpowers;
};
