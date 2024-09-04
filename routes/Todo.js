const express = require('express')
const router= express.Router()
const todo = require ('../controllers/todo')

// app.get index.ejs to find the database on homepage
router.get("/", todo.homeController);
  
  // app.get newTodo.ejs
  router.get("/addtodo", todo.addTodoController );
  
  // update todo
  
  router.get("/updatetodo", todo.updateTodoController );
  
  // delete todo
  
  router.get("/deletetodo", todo.deleteTodoController);
  
  // POST THE TODO DATA 
  
  router.post('/addtodo' , todo.postTodoController)

  // post updatedData
  router.post('/updatetodo/:id' , todo.updateposteddataController) 

  // delete Todo by finding id
  router.get ('/confirm-delete' , todo.confirmdeleteController)
  
module.exports=router;