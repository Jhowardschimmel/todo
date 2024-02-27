const express = require('express'); //import express
const router  = express.Router();
const todoController = require('../controllers/todo');

router.get('/todo', todoController.getAllTodos);
router.post('/todo', todoController.newTodo); 
router.delete('/todo', todoController.deleteAllTodos);

router.get('/todo/:name', todoController.getOneTodo);
//:TODO Implement routes for post and delete of single entities
module.exports = router; // export to use in server.js