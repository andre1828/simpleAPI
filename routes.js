var appRouter = function(app) {

    var todos = [

      {
        title : 'sei la',
        date : '12/08/16'
      },
      {
        title : 'testando',
        date : '12/09/16'
      },
      {
        title : 'comprar biscoito',
        date : '12/10/16'
      },

    ];

    app.get('/', function(req, res) {
        res.send('MAHALOOO');
    });

    app.get('/todos', function(req, res) {
        res.send( JSON.stringify(todos) );
    });

    app.post('/todos', function(req, res) {
        console.log(req.body);
        var newTodo = {
          title : req.body.title,
          date : req.body.date
        };
        todos.push(newTodo);
        res.send( JSON.stringify(todos) );
    });

}

module.exports = appRouter;
