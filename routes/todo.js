const express = require("express"); //import express
const router = express.Router();
const todoController = require("../controllers/todo");

router.get("/todo", todoController.listTodos);
router.post("/todo", todoController.createTodo);
// router.patch("/todo", todoController.updateTodo); // I am not sure about this.
// router.delete("/todo", todoController.deleteAllTodos);

router.get("/todo/:id", todoController.getTodo);
router.delete("todo/:id", todoController.deleteTodo);
//:TODO Implement routes for post and delete of single entities
module.exports = router; // export to use in server.js

// I forgot most of this stuff...
