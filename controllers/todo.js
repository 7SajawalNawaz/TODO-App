const Todo = require("../models/Todo");

const homeController = async (req, res, next) => {
  try {
    const todos = await Todo.find({}).sort({ ceatedAt: 1 });
    res.render("index", { todos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addTodoController = (req, res, next) => {
  try {
    res.render("newtodo");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTodoController = async (req, res, next) => {
  try {

    const {id}= req.query;
    const todo = await Todo.findById(id)

    res.render("updatetodo" , {todo});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTodoController = (req, res, next) => {
  try {
    const {id} = req.query;
    res.render("deletetodo" , {id});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postTodoController = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    const newTodo = new Todo({ title, desc });
    await newTodo.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateposteddataController=  async (req , res , next)=>{
  try{
const {id} = req.params;
const {title , desc }= req.body
const todo =await Todo.findById(id)
if(!todo){
  return res.status(404).json({message: "Error Id Not Found"})
}

todo.title=title;
todo.desc=desc;
await todo.save()
res.redirect('/')
  }
  catch(err){
    res.status(500).json({message:err.message})
  }
}


const confirmdeleteController= async (req,res,next)=>{
try{
const {id , confirm} = req.query
if(confirm === 'yes'){
  const result=await Todo.findByIdAndDelete(id)
  if(!result){
    return res.status(404).json({ message: 'Todo not found' });
    
  }
}

res.redirect('/')
}catch(err){
  res.status(500).json({message:err.message})
}
}

module.exports = {
  homeController,
  addTodoController,
  updateTodoController,
  deleteTodoController,
  postTodoController,
  updateposteddataController,
  confirmdeleteController
};
