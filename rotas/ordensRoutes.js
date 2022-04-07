

const OrdemController = require('../controllers/ordensController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/ordens/getAll', middlewareValidarJWT, OrdemController.getAll);
    app.get('/api/v2/ordens/getAll', OrdemController.getAll);
    app.get('/api/v1/ordens/:id', OrdemController.findById);  

    app.post('/api/v1/ordens/create',middlewareValidarJWT, OrdemController.create);
  
    app.put('/api/v1/ordens/update', middlewareValidarJWT,OrdemController.update);

    app.delete('/api/v1/ordens/excluir/:id', OrdemController.delete);


}