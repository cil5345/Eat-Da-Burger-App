

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(200),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);