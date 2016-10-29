var appRouter = function(app) {

    var pedidos = [
      {
        sabor : 'Marguerita',
        formaPagamento : 3
      },
      {
        sabor : 'Quatro queijos',
        formaPagamento : 1
      }
    ];

    var formaPagamentos = {
      1 : 'Dinheiro',
      2 : 'Cartao',
      3 : 'Deus lhe pague'
    };

    app.get('/', function(req, res) {
        res.send('Pizzaria MP API');
    });

    app.get('/pedidos', function(req, res) {
        for (var i = 0; i < pedidos.length; i++) {
          pedidos[i].id = i;
        }
        res.json(pedidos);
    });

    app.get('/pedidos/pedido/:index', function(req, res, next) {
        var pedidoSolicitado = pedidos[req.params.index] || {};
        res.send(pedidoSolicitado);
    });

    app.post('/pedidos', function(req, res) {
        var formaPagamento = parseInt(req.body.formaPagamento);

        if (!req.body.sabor || !req.body.formaPagamento || [1, 2, 3].indexOf(formaPagamento) === -1 ) {
            res.send("Solicitação inválida, ausência de um ou mais argumentos");
            return;
        }

        var novoPedido = {
            sabor: req.body.sabor,
            formaPagamento: req.body.formaPagamento
        };
        pedidos.push(novoPedido);
        res.json(novoPedido);
    });

}

module.exports = appRouter;
