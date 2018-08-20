var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

//mimic whats in the database

var db = sequelize.define("burgers",
{
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
  },
  { 
      freezeTableName: true,
    timestamps: false
  });

  db.sync();

  module.exports = db;

