var orm = require('../config/orm.js');

//create burger variable for the controller
var burger = {

    //selectAll for all the burgers
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        });
    },

    //insertOne for adding burgers
    create: function(cols, vals, cb) {
        orm.create('burgers', cols, vals, function(res){
            cb(res);
        });
    },

    //update burger status
    update: function(objColVals, condition, cb){
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

//export burger back to the controller
module.exports = burger;

