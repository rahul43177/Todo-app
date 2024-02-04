const { createTodo, updateTodo } = require("../types");

const todoModel = require("../model/todoModel");
module.exports.getAllTodo = async (req, res) => {
  const allTodo = await todoModel.find({})
};

module.exports.createTodo = async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you set the wrong inputs",
    });
    return;
  }

  await todoModel.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  return res.status(201).json({
    status: true,
    message: "Todo Created successfully",
  });
};

module.exports.completed = async (req, res) => {
  const updatedPayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatedPayload);

  if (!parsedPayload.success) {
    res.status(403).json({
      status: false,
      message: "You send the wrong inputs",
    });
    return;
  }
  await todoModel.update(
    {
      _id: req.body.id,
    },
    {
      $set: {
        completed: true,
      },
    }
  );

  return res.status(200).json({
    status: true,
    message: "Todo Marked as completed ",
  });
};
