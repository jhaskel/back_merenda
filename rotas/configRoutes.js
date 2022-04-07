

const ConfigController = require('../controllers/ConfigController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/config/getAll', middlewareValidarJWT, ConfigController.getAll);
    app.get('/api/v2/config/getAll', ConfigController.getAll);
    app.get('/api/v1/config/:id', ConfigController.findById);
    app.get('/api/v1/config/findBySetor/:setor', ConfigController.findBySetor);

    app.post('/api/v1/config/create',middlewareValidarJWT, ConfigController.create);
  
    app.put('/api/v1/config/update', middlewareValidarJWT,ConfigController.update);

    app.delete('/api/v1/config/excluir/:id', ConfigController.delete);


}