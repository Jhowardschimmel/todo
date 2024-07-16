// newTodo function for post todo route
// curl -X POST http://localhost:3000/todo
const Todo = require('../models/todoQueries')

const newTodo = (req, res, next) => {
  console.log('posting new todo')
  const newTodo = {
    title: req.body.title,
    description: req.body.description,
    due_date: req.body.due_date
  };

  Todo.create(newTodo, (err, data) => {
    console.log('inside create!')
    if (err) {
      res.status(500).send({
        message: err.message || "An error posting TODO occured"
      })
    } else {
      console.log('sending')
      res.send(data);
    }
  })
  // Todo.create(req, res);
  // res.json({ message: "POST new todo" }); // stub function for now
  // res.send(res);
};

// const getTodos = (req, res, next) => {
//   Todo.findAll();
//   // res.json({ message: "GET All Todos" });
// };

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
