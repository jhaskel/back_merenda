

const PedidosController = require('../controllers/PedidoController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/pedidos/getAll', middlewareValidarJWT, PedidosController.getAll);
    app.get('/api/v2/pedidos/getAll', PedidosController.getAll);
    app.get('/api/v1/pedidos/:id', PedidosController.findById);  

    app.post('/api/v1/pedidos/create',middlewareValidarJWT, PedidosController.create);
  
    app.put('/api/v1/pedidos/update', middlewareValidarJWT,PedidosController.update);

    app.delete('/api/v1/pedidos/excluir/:id', PedidosController.delete);


}