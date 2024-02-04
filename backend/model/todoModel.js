const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: String,
});

module.exports = mongoose.model('todo' , todoSchema)