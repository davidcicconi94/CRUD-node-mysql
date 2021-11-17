-- Creating the Database
CREATE DATABASE crudnodejs;

-- Using Database
use crudenodejs;

-- Creating table
CREATE TABLE customer {
    id INT(7) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    adress VARCHAR(100) NOT NULL
    phone VARCHAR(15)
};

-- Show Tables
SHOW TABLES;

-- To describe the table
describe customer;
