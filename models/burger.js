// require in the orm file that will talk to the database
var orm = require("../config/orm.js");

// create the burger variable that will be exported back to the controller
var burger = {
  // selectAll for getting all the burgers
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    });
  },
  //The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  // updateOne for changing the burger status
  update: function(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

//Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

