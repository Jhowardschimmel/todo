const express = require('express'); //import express
const router  = express.Router();
const todoController = require('../controllers/todo');

router.get("/todo", todoController.getTodos)

router.get('/',(req,res)=>{
    res.send("Get All Todos")
})
//:TODO Implement routes for post and delete of single entities
module.exports = router; // export to use in server.js