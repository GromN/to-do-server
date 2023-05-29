const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const todoList = [];

app.get("/todo", (req, res) => {
  res.json(todoList);
});

app.post("/todo", (req, res) => {
  todoList.push(req.body);
  res.json(req.body);
});

//connect to mongoDB
//start mongo when the server starts (mongos orm - stackoverflow)
//create a docker container and start a db inside of it

app.delete("/todo", (req, res) => {
  res.send("Hello World!");
});

app.patch("/todo", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
