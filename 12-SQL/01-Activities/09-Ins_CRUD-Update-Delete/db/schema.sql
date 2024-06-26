-- Drops the inventory_db if it exists currently --
DROP DATABASE IF EXISTS inventory_db;
-- Creates the inventory_db database --
CREATE DATABASE inventory_db;

-- use inventory_db database --
\c inventory_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE produce (
  -- Creates a numeric column called "id" --
  id INTEGER NOT NULL,
  -- Creates a string column called "name" which can hold up to 30 characters and cannot contain null --
  name VARCHAR(30) NOT NULL
);

-- Insert multiple produce items --
INSERT INTO produce (id, name)
VALUES
    ( 1, 'apple'),
    ( 2, 'orange'),
    ( 3, 'banana');
    
    
