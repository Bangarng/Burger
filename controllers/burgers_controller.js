var express = require("express");
var router = express.Router();
var db = require("../models/burger.js");


router.get("/create", function(req,res){
    res.render("create", {});
});

router.get("/", function(req, res){

    db.findAll({}).then(function(results) {
        // results are available to us inside the .then
       // console.log(results);
        res.render("index", {quotes: results}); 
    });

});

router.put("/updatepost/:id", function(req, res){

   console.log("author :" + req.body.author);
   console.log("quote:" + req.body.quote);
   console.log("id :" + req.params.id);
    //sequelize will update data using client information passed to it
    db.update(
        {
            author: req.body.author,
            quote: req.body.quote
        },{
        where: {
            id : req.params.id
        }

        }
    ).then(function(db){
        res.json(db);
    });

});

router.get("/update/:id", function(req, res){

    db.findOne({
        where: {id: req.params.id}
    }).then(function(result){
        console.log(result);
        res.render("quotes", {updatequote: result});

    });

   
})


router.delete("/api/delete/:id", function(req, res){

    console.log("Trying to delete" + req.params.id);

    //talk to sequelize to delete the record

    db.destroy({
        where: {
            id: req.params.id
        }
    }

    ).then(function(dbQuote){

        console.log(dbQuote);
        res.json(dbQuote);
    }

    )

   
});

module.exports = router;
