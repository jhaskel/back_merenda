

const EstoqueController = require('../controllers/estoqueController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/estoque/getAll', middlewareValidarJWT, EstoqueController.getAll);
    app.get('/api/v2/estoque/getAll', EstoqueController.getAll);
    app.get('/api/v1/estoque/:id', EstoqueController.findById);  

    app.post('/api/v1/estoque/create',middlewareValidarJWT, EstoqueController.create);
  
    app.put('/api/v1/estoque/update', middlewareValidarJWT,EstoqueController.update);

    app.delete('/api/v1/estoque/excluir/:id', EstoqueController.delete);


}