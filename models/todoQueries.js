const sql = require("./db.js");
const pool = require('./db.js')

// constructor
const Todo = function(todo) {
    this.task = todo.task;
    this.due_date = todo.due_date,
    this.description = todo.description
}

// Example query function that manages connections
const query = async (sql, params) => {
    const connection = await pool.getConnection();
    try {
      const [results] = await connection.query(sql, params);
      return results; // Return results
    } catch (error) {
      throw error; // Propagate error
    } finally {
      connection.release(); // Always release the connection
    }
  };

  Todo.create = async (newTodo) => {
    const sql = "INSERT INTO tasks SET ?";
    const results = await query(sql, newTodo);
    return results.insertId; // Return the new ID or any relevant data
  };

// Todo.create = (newTodo, result) => {
//     console.log('newTodo', newTodo)
//     sql.query("INSERT INTO tasks SET ?", newTodo, (err, res) => {
//         console.log('res', res)
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         console.log('created todo: ', { id: res.insertId, ...newTodo });
//         result(null, {id: res.insertId, ...newTodo});
//     })
// }

Todo.findOne = (id, result) => {
    sql.query("SELECT * FROM tasks WHERE id = ?", [id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found todo: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // No record found with the given ID
      result({ kind: "not_found" }, null);
    });
  };

//   Todo.findAll = (result) => {
//     sql.query("SELECT * FROM tasks", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         console.log("todos: ", res);
//         result(null, res);
//     });
// };

Todo.findAll = async () => {
    const sql = "SELECT * FROM tasks LIMIT 100";
    const results = await query(sql); // Use await to get results
    console.log("Executing query: ", sql); // Log the query
    console.log("Query results: ", results); // Log results

    return results; // Return the results
};


  

module.exports =  Todo;