

const CardapioController = require('../controllers/CardapioController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/cardapios/getAll', middlewareValidarJWT, CardapioController.getAll);
    app.get('/api/v2/cardapios/getAll', CardapioController.getAll);
    app.get('/api/v1/cardapios/:id', CardapioController.findById);  

    app.post('/api/v1/cardapios/create',middlewareValidarJWT, CardapioController.create);
  
    app.put('/api/v1/cardapios/update', middlewareValidarJWT,CardapioController.update);

    app.delete('/api/v1/cardapios/excluir/:id', CardapioController.delete);


}