

const FornecedorController = require('../controllers/FornecedoresController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/fornecedores/getAll', middlewareValidarJWT, FornecedorController.getAll);
    app.get('/api/v2/fornecedores/getAll', FornecedorController.getAll);
    app.get('/api/v1/fornecedores/:id', FornecedorController.findById);  

    app.post('/api/v1/fornecedores/create',middlewareValidarJWT, FornecedorController.create);
  
    app.put('/api/v1/fornecedores/update', middlewareValidarJWT,FornecedorController.update);

    app.delete('/api/v1/fornecedores/excluir/:id', FornecedorController.delete);


}