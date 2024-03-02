// newTodo function for post todo route
// https://curl.se/docs/httpscripting.html
// curl -X POST http://localhost:3000/todo
// curl http://localhost:3000/todo
const createTodo = (req, res, next) => {
    res.json({ message: "POST new todo" }); // stub function for now
};

const listTodos = (req, res, next) => {
    res.json({ message: "List todos" }); // stub function for now
};

const getTodo = (req, res, nex) => {
    res.json({ message: "Get todo by id" })

};

const deleteTodo = (req, res, next) => {
    res.json({ message: "Delete todo by id" })
};



//TODO: Stub dummy functions like aboce for routes.

//TODO: Dont forget to export below.
module.exports = {
    createTodo,
    listTodos,
    getTodo,
    deleteTodo
};
