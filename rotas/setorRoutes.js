

const SetorController = require('../controllers/SetorController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/setor/getAll', middlewareValidarJWT, SetorController.index);
    app.get('/api/v2/setor/getAll', SetorController.index);
    app.get('/setor/:id', SetorController.findById);
    app.post('/api/v2/setor/create', SetorController.create);
    app.delete('/api/v2/setor/excluir/:id', SetorController.delete);
    app.put('/api/v2/setor/update', SetorController.update);


}