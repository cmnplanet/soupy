// index action
router.get('/todo', function(req, res){
  models.Todo.findAll().then(function(todos){
    res.render('todos',{todos: todos});
  });
});

//create action
router.post('/todo', function(req, res){
  let todo = {
      todo: req.body.todo,
      yetTodo: true
  };
  models.Todo.create(todo).then(function(promise){
    res.direct('/todos');
  });
  });

module.exports = router;
