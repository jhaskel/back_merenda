

const CidadeController = require('../controllers/CidadeController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/cidades/getAll', middlewareValidarJWT, CidadeController.index);
    app.get('/api/v2/cidades/getAll', CidadeController.index);
    app.get('/cidades/:id', CidadeController.findById);
    app.post('/api/v2/cidades/create', CidadeController.create);
    app.delete('/api/v2/cidades/excluir/:id', CidadeController.delete);    
    app.put('/api/v1/cidades/update',middlewareValidarJWT, CidadeController.update);
    app.put('/api/v2/cidades/update', CidadeController.update);


}