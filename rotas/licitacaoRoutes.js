

const LicitacaoController = require('../controllers/LicitacaoController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/licitacao/getAll', middlewareValidarJWT, LicitacaoController.getAll);
    app.get('/api/v2/licitacao/getAll', LicitacaoController.getAll);
    app.get('/api/v1/licitacao/:id', LicitacaoController.findById);  

    app.post('/api/v1/licitacao/create',middlewareValidarJWT, LicitacaoController.create);
  
    app.put('/api/v1/licitacao/update', middlewareValidarJWT,LicitacaoController.update);

    app.delete('/api/v1/licitacao/excluir/:id', LicitacaoController.delete);


}