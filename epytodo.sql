CREATE DATABASE epytodo;

use epytodo;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE todo (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    due_time DATETIME NOT NULL,
    status ENUM('not started', 'todo', 'in progress', 'done') DEFAULT 'not started',
    user_id INT NOT NULL,
    PRIMARY KEY (id)
);
