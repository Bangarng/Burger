var express = require("express");
var router = express.Router();
var db = require("../models/burger.js");

router.get("/", function(req, res){

    db.findAll({}).then(function(results) {
        // results are available to us inside the .then
       // console.log(results);
        res.render("index", {quotes: results}); 
    });

});

module.exports = router;