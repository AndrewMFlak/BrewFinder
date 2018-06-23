DROP DATABASE BrewFinder_db IF EXISTS;
CREATE DATABASE BrewFinder_db;
USE BrewFinder_db;

DROP TABLE IF EXISTS tourInfo;
CREATE TABLE tourInfo
(
   id int NOT NULL AUTO_INCREMENT,
   tourName VARCHAR(255),
   tourDescription VARCHAR(255),
   tourInstructions VARCHAR(255),
   PRIMARY KEY (id)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);