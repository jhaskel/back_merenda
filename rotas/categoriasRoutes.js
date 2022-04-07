

const CategoriaController = require('../controllers/CategoriaController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/categorias/getAll', middlewareValidarJWT, CategoriaController.getAll);
    app.get('/api/v2/categorias/getAll', CategoriaController.getAll);
    app.get('/api/v1/categorias/:id', CategoriaController.findById);  

    app.post('/api/v1/categorias/create',middlewareValidarJWT, CategoriaController.create);
  
    app.put('/api/v1/categorias/update', middlewareValidarJWT,CategoriaController.update);

    app.delete('/api/v1/categorias/excluir/:id', CategoriaController.delete);


}