DROP DATABASE IF EXISTS todo_app;
CREATE DATABASE todo_app;
USE todo_app;
CREATE TABLE IF NOT EXISTS lists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    completed BOOLEAN DEFAULT FALSE,
    list_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (list_id) REFERENCES lists(id)
);

INSERT INTO lists (name)
VALUES 
('Chores');

INSERT INTO tasks (title, description, due_date, completed, list_id)
VALUES 
('Buy groceries', 'Milk, Bread, Butter', '2024-06-20', FALSE, 1),
('Call the bank', 'Discuss mortgage options', '2024-06-22', FALSE, 1),
('Plan vacation', 'Book flights and hotel for summer vacation', '2024-07-01', FALSE, 1);
