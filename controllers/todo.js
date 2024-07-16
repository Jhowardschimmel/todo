// newTodo function for post todo route
// curl -X POST http://localhost:3000/todo
const Todo = require('../models/todoQueries')

const newTodo = async (req, res) => {
 const body = req.body;
 const reqTodo = {
    title: body.title,
    description: body.description,
    due_date: body.due_date
 }
 const results = await Todo.create(reqTodo)
 const newTodo = await Todo.findOne(results.insertId)
 console.log('newTodo', newTodo);

 res.status(201).json({ newTodo });

}


// GOT THIS ONE WORKINGs
const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.findAll(); // Wait for the todos to be fetched
    console.log("All Todos: ", todos); // Log to see all tasks
    res.json(todos); // Send the todos as a JSON response
  } catch (err) {
    console.log("error: ", err);
    res.status(500).send({ message: "An error occurred while retrieving todos." });
  }
};


const deleteTodo = (req, res, next) => {
  res.json({ message: "This Todo has been Deleted" });
};

const putUpdateTodo = (req, res, next) => {
  res.json({ message: "Todo Updated" });
};

const patchUpdateTodo = (req, res, next) => {
  res.json({ message: "Patch Update Todo" });
};
//TODO: Stub dummy functions like above for routes.

//TODO: Dont forget to export below.
module.exports = {
  newTodo,
  getTodos,
  deleteTodo,
  putUpdateTodo,
  patchUpdateTodo,
};
