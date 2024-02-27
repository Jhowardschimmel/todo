const express = require('express');
const routes = require('./routes/todo');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });