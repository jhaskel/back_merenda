

const EscolaController = require('../controllers/EscolasController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/escolas/getAll', middlewareValidarJWT, EscolaController.getAll);
    app.get('/api/v2/escolas/getAll', EscolaController.getAll);
    app.get('/api/v1/escolas/:id', EscolaController.findById);
    app.get('/api/v1/escolas/findBySetor/:setor', EscolaController.findBySetor);
    app.get('/api/v1/escolas/findByNivel/:nivel', EscolaController.findByNiveis);

    app.post('/api/v1/escolas/create',middlewareValidarJWT, EscolaController.create);
  
    app.put('/api/v1/escolas/update', middlewareValidarJWT,EscolaController.update);

    app.delete('/api/v1/escolas/excluir/:id', EscolaController.delete);


}