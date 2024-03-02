const express = require("express"); //import express
const router = express.Router();
const todoController = require("../controllers/todo");

router.get("/todo", todoController.getTodos);
router.post("/todo", todoController.newTodo);
router.put("/todo", todoController.putUpdateTodo);
router.delete("/todo", todoController.deleteTodo);
router.patch("/todo", todoController.patchUpdateTodo);

//:TODO Implement routes for post and delete of single entities
module.exports = router; // export to use in server.js
