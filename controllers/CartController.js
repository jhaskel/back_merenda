const Cart = require('../models/cart');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const carts = await Cart.findAll();        
      return res.status(201).json(carts);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os produtos do carrinho',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const carts = await Cart.findByPk(id)     
      if (!carts) {
        return res.status(404).json({ 
          message: 'Nenhum produto encontrado',success:false
         });
      }
      return res.status(201).json(carts);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os produtos do carrinho',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { escola_id, estoque_id,quantidade,valor,total } = req.body; 
   
    try {      
     
        const cliente = await Cart.create({escola_id, estoque_id,quantidade,valor,total });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar a cart',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id,escola_id, estoque_id,quantidade,valor,total} = req.body;
    
    try {
      const cate = await Cart.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Item do carrinho não encontrado",success:false });
        
        } 
       
       
        
      await Cart.update({ 
        escola_id, estoque_id,quantidade,valor,total }, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Cart.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Item  atualizado com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar o carrinho de compras',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const cidade = await Cart.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Item não não encontrado" });
        
        } 
        await Cart.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:cidade,
            message: 'Produto excluído com sucesso'
        });
    } 
    catch(e) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Erro ao Excluir o produto do carrinho',
            error: error
        });
    }
  },
};