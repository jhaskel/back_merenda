

const NivelController = require('../controllers/NiveisController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/niveis/getAll', middlewareValidarJWT, NivelController.getAll);
    app.get('/api/v2/niveis/getAll', NivelController.getAll);
    app.get('/api/v1/niveis/:id', NivelController.findById);
    app.get('/api/v1/niveis/findBySetor/:setor', NivelController.findBySetor);

    app.post('/api/v1/niveis/create',middlewareValidarJWT, NivelController.create);
  
    app.put('/api/v1/niveis/update', middlewareValidarJWT,NivelController.update);

    app.delete('/api/v1/niveis/excluir/:id', NivelController.delete);


}