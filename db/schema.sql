DROP DATABASE tourFinder_db IF EXISTS;
CREATE DATABASE tourFinder_db;
USE tourFinder_db;

DROP TABLE IF EXISTS tourInfo;
CREATE TABLE tourInfo(
   id int NOT NULL AUTO_INCREMENT,
   tourName VARCHAR(255),
   tourDescription VARCHAR(255),
   tourInstructions VARCHAR(255),
   PRIMARY KEY (id)
);