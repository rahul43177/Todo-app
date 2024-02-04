const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: String,
});

module.exports = mongoose.exports('Todo' , todoSchema)

