const {
    createTodo,
    updateTodo,
  } = require("../types");


module.exports.getAllTodo = (req,res) => {
    
}

module.exports.createTodo = async (req,res) => {
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success) {
      res.status(411).json({
        msg  : "you set the wrong inputs"
      })
      return;
    }

    const {title , description} = createPayload

    const newTodo = {
      title , 
      description
    }

    
    
    
}

module.exports.completed = (req,res) => {
    
}