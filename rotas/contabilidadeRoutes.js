

const ContabilidadeController = require('../controllers/ContabilidadeController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/despesas/getAll', middlewareValidarJWT, ContabilidadeController.getAll);
    app.get('/api/v2/despesas/getAll', ContabilidadeController.getAll);
    app.get('/api/v1/despesas/:id', ContabilidadeController.findById);  

    app.post('/api/v1/despesas/create',middlewareValidarJWT, ContabilidadeController.create);
  
    app.put('/api/v1/despesas/update', middlewareValidarJWT,ContabilidadeController.update);

    app.delete('/api/v1/despesas/excluir/:id', ContabilidadeController.delete);


}