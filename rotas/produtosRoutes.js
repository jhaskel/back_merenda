

const ProdutoController = require('../controllers/produtoController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/produtos/getAll', middlewareValidarJWT, ProdutoController.getAll);
    app.get('/api/v2/produtos/getAll', ProdutoController.getAll);
    app.get('/api/v1/produtos/:id', ProdutoController.findById);  

    app.post('/api/v1/produtos/create',middlewareValidarJWT, ProdutoController.create);
  
    app.put('/api/v1/produtos/update', middlewareValidarJWT,ProdutoController.update);

    app.delete('/api/v1/produtos/excluir/:id', ProdutoController.delete);


}