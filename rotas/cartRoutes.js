

const CartController = require('../controllers/CartController');



module.exports = (app, middlewareValidarJWT) => {


    app.get('/api/v1/cart/getAll', middlewareValidarJWT, CartController.getAll);
    app.get('/api/v2/cart/getAll', CartController.getAll);
    app.get('/api/v1/cart/:id', CartController.findById);  

    app.post('/api/v1/cart/create',middlewareValidarJWT, CartController.create);
  
    app.put('/api/v1/cart/update', middlewareValidarJWT,CartController.update);

    app.delete('/api/v1/cart/excluir/:id', CartController.delete);


}