

const PnaeController = require('../controllers/PnaeController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/pnaes/getAll', middlewareValidarJWT, PnaeController.getAll);
    app.get('/api/v2/pnaes/getAll', PnaeController.getAll);
    app.get('/api/v1/pnaes/:id', PnaeController.findById);  

    app.post('/api/v1/pnaes/create',middlewareValidarJWT, PnaeController.create);
  
    app.put('/api/v1/pnaes/update', middlewareValidarJWT,PnaeController.update);

    app.delete('/api/v1/pnaes/excluir/:id', PnaeController.delete);


}