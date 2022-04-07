const Cardapio = require('../models/cardapio');
module.exports = {     
  
  async getAll(req, res) {   
   
    
    try {
      const escol = await Cardapio.findAll();        
      return res.status(201).json(escol);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as cardapios',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const cardapioss = await Cardapio.findByPk(id)     
      if (!cardapioss) {
        return res.status(404).json({ 
          message: 'Cardapio não encontrada',success:false
         });
      }
      return res.status(201).json(cardapioss);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as cardapios',
          error: error,
          success: false
      })
  } 
   
  },

  async findBySetor(req, res) {
    var setor = req.params.setor;
    try {
      
      const cardapioss = await Cardapio.findAll({ where : {setor_id : setor }}); 
      if (!cardapioss) {
        return res.status(404).json({ 
          message: 'Cardapio não encontrada',success:false
         });
      }
      return res.status(201).json(cardapioss);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as cardapios',
          error: error,
          success: false
      })
  } 
   
  },
  async findByNiveis(req, res) {
    var nivel = req.params.nivel;
    try {
      
      const cardapioss = await Cardapio.findAll({ 
        where : {nivel_id : nivel },
        include: { association: 'nivel_escola' }
      }); 
      if (!cardapioss) {
        return res.status(404).json({ 
          message: 'Cardapio não encontrada',success:false
         });
      }
      return res.status(201).json(cardapioss);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as cardapios',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { 
      setor_id,
      escola_id,
      imagem,
      title,
      isativo
    } = req.body;    
    try {     
     
        const cliente = await Cardapio.create({ 
          setor_id,
      escola_id,
      imagem,
      title,
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
          message: 'Erro ao adicionar a escola',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  { 
      id,
      setor_id,
      escola_id,
      imagem,
      title,
      isativo
    } = req.body;
    
    try {
      const Conf = await Cardapio.findByPk(id);

      if(!Conf){
          res.status(400).json({ error : "Cardapio não encontrada",success:false });
        
        } 
        
      await Cardapio.update({ 
        setor_id,
      escola_id,
      imagem,
      title,
      isativo    
      }, {
        where: {
          id: id
        }
      });
    
      const catAtualizada = await Cardapio.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Cardapio  atualizado com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar o Cardapio',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const Conf = await Cardapio.findByPk(id);
      if(!Conf){
          res.status(400).json({ error : "Cardapio não encontrado" });
        
        } 
        await Cardapio.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:Cardapio,
            message: 'Cardapio excluído com sucesso'
        });
    } 
    catch(e) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Erro ao Excluir o Cardapio',
            error: error
        });
    }
  },
};