

const ItensController = require('../controllers/ItensController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/itens/getAll', middlewareValidarJWT, ItensController.getAll);
    app.get('/api/v2/itens/getAll', ItensController.getAll);
    app.get('/api/v1/itens/:id', ItensController.findById);  
    app.get('/api/v1/itens/setor/:setor', ItensController.findBySetor);  

    app.post('/api/v1/itens/create',middlewareValidarJWT, ItensController.create);
  
    app.put('/api/v1/itens/update', middlewareValidarJWT,ItensController.update);

    app.delete('/api/v1/itens/excluir/:id', ItensController.delete);


}