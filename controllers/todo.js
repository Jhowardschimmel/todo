// newTodo function for post todo route
// curl -X POST http://localhost:3000/todo
const newTodo = (req, res, next) => {
    res.json({message: "POST new todo"}); // stub function for now
};

const getTodos = (req, res, next) =>{
    res.json({message:"GET All Todos"});
}

//TODO: Stub dummy functions like aboce for routes.

//TODO: Dont forget to export below.
module.exports = {
    newTodo, 
    getTodos
};
