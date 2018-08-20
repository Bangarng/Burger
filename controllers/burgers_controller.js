var express = require("express");
var router = express.Router();
var db = require("../models/burger.js");

//add endpoint taht gets all burgers from the DB
//then render the index file by passing in all the burgers as an object for handlebars to use
router.get("/", function(req, res){
    db.all(function(data) {
        var allBurgers = {burgers: data};
        console.log(allBurgers);
        res.render('index', allBurgers);
    });
});    

//add a burger with the insertOne Endpoint that posts
//the burger name and a boolean value of false for the devoured column
//then redirect back to the /index route
router.post('/burgers/create', function(req, res) {
    db.create(['burger_name', 'devoured'], [req.body.name, false], function() {
        res.redirect('/');
    });
});

//adds a /burgers/updateOne/:id route that
//updates the burger from being uneaten to devoured, 
//then redirect it to the /index endpoint/homepage
router.put('/burgers/update/:id', function(req, res){
    var condition = 'id = ' + req.params.id;
    console.log("The condition of the burger is ", condition);
    db.update({devoured: req.body.devoured}, condition, function() {
        res.redirect('/');
    });
});

module.exports = router;