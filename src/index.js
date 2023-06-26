const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/todoApp");
app.use(express.json());

const Todo = mongoose.model("Todo", {
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  status: Number,
});

app.get("/todo", async (req, res) => {
  const todoList = await Todo.find({});

  res.json(todoList);
});

app.get("/todo/id/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  res.json(todo);
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


app.patch("/todo/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const update = req.body;

  await Todo.findOneAndUpdate(filter, update);

});

app.put("/todo/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const update = req.body;

  await Todo.findOneAndUpdate(filter, update);
});

app.delete("/todo/:id", async (req, res) => {
  const filter = { _id: req.params.id };

  await Todo.deleteOne(filter);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//use filtering in patch, put and delete
//write GET request to get by id that is created by mongo (objectId -> string)