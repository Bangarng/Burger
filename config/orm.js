var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 2747,
    user: "root",
    password: "NotAnother1",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        return;
    }
    console.log("Connected at Port " + PORT + " (BRGR)");
});

var orm = {

    select: function(col, table, cb)
    
    {

        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [col, table], function(err, result){
                if(err)throw err;

              console.log(result);  

              cb(err, result);

        });

    }
}

module.exports = orm;