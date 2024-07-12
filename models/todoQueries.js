const sql = require("./db.js");

// constructor
const Todo = function(todo) {
    this.task = todo.task;
    this.createdAt = todo.createdAt;
    this.completed = todo.completed;
    this.duedate = todo.duedate
}

Todo.create = (newTodo, result) => {
    sql.query("INSERT INTO tutorials SET ?", newTodo, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log('created todo: ', { id: res.insertId, ...newTodo });
        result(null, {id: res.insertId, ...newTodo});
    })
}

module.exports =  Todo;