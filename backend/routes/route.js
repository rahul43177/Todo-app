const express = require("express");
const router = express.Router();
const {getAllTodo , createTodo , completed} = require('../controller/controller')

router.get('/getAllTodos' , getAllTodo)

router.post('/createTodo' , createTodo)

router.put('/completed' , completed)


module.exports = router;
