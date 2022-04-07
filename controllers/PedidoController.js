const Pedido = require('../models/pedidos');
module.exports = {     
  
  async getAll(req, res) {   
   
    
    try {
      const escol = await Pedido.findAll();        
      return res.status(201).json(escol);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as pedidos',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const pedidosss = await Pedido.findByPk(id)     
      if (!pedidosss) {
        return res.status(404).json({ 
          message: 'Pedido não encontrado',success:false
         });
      }
      return res.status(201).json(pedidosss);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os pedidos',
          error: error,
          success: false
      })
  } 
   
  },

  async findBySetor(req, res) {
    var setor = req.params.setor;
    try {
      
      const pedidosss = await Pedido.findAll({ where : {setor_id : setor }}); 
      if (!pedidosss) {
        return res.status(404).json({ 
          message: 'Pedido não encontrado',success:false
         });
      }
      return res.status(201).json(pedidosss);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os pedidos',
          error: error,
          success: false
      })
  } 
   
  },
  async findByNiveis(req, res) {
    var nivel = req.params.nivel;
    try {
      
      const pedidosss = await Pedido.findAll({ 
        where : {nivel_id : nivel },
        include: { association: 'nivel_escola' }
      }); 
      if (!pedidosss) {
        return res.status(404).json({ 
          message: 'Pedido não encontrado',success:false
         });
      }
      return res.status(201).json(pedidosss);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as pedidos',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { 
      setor_id,
      escola_id,
      status_id,
      user_id,
      total,
      is_ordem,
      isativo

    } = req.body;    
    try {     
     
        const cliente = await Pedido.create({ 
          setor_id,
      escola_id,
      status_id,
      user_id,
      total,
      is_ordem,
      isativo
    });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar o pedido',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  { 
      id,
      setor_id,
      escola_id,
      status_id,
      user_id,
      total,
      is_ordem,
      isativo
    } = req.body;
    
    try {
      const Conf = await Pedido.findByPk(id);

      if(!Conf){
          res.status(400).json({ error : "Pedido não encontrado",success:false });
        
        } 
        
      await Pedido.update({ 
        setor_id,
      escola_id,
      status_id,
      user_id,
      total,
      is_ordem,
      isativo
      }, {
        where: {
          id: id
        }
      });
    
      const catAtualizada = await Pedido.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Pedido atualizado com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar o pedido',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const Conf = await Pedido.findByPk(id);
      if(!Conf){
          res.status(400).json({ error : "Pedido não encontrado" });
        
        } 
        await Pedido.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:Pedido,
            message: 'Pedido excluído com sucesso'
        });
    } 
    catch(e) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Erro ao Excluir o Pedido',
            error: error
        });
    }
  },
};