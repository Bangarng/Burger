--Create the Burgers Datebase--
CREATE DATABASE burgers_db;

--Grab the Database to use--
USE burgers_db;

CREATE TABLE burgers 
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL, 
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);