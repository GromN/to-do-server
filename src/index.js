const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/todoApp");
app.use(express.json());

const Todo = mongoose.model("Todo", {
  title: String,
  description: String,
  status: Number,
});

app.get("/todo", async (req, res) => {
  const todoList = await Todo.find({});

  res.json(todoList);
});

app.get("/todo/:id", async (req, res) => {

  const todoList = await Todo.find({
    id: req.params.id,
    // status: req.params.status,
  });

  res.json(todoList);
});

app.post("/todo", (req, res) => {
  const todoItem = new Todo({
    title: req.body.title,
    description: req.body.description,
    status: 0,
  });
  todoItem.save().then(() => console.log("created"));

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

//use filtering in patch, put and delete
//figure out hot to GET by id that is created by mongo (objectId -> string)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
