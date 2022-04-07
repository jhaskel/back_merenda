const Config = require('../models/config');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const configs = await Config.findAll();        
      return res.status(201).json(configs);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os Configurações',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const configs = await Config.findByPk(id)     
      if (!configs) {
        return res.status(404).json({ 
          message: 'Config not found',success:false
         });
      }
      return res.status(201).json(configs);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os Configurações',
          error: error,
          success: false
      })
  } 
   
  },

  async findBySetor(req, res) {
    var setor = req.params.setor;
    try {
      
      const configs = await Config.findOne({ where : {setor_id : setor }}); 
      if (!configs) {
        return res.status(404).json({ 
          message: 'Config not found',success:false
         });
      }
      return res.status(201).json(configs);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as Configurações',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { 
      setor_id,
      name,
      cargo,
      enviaofocio,
      definedespesa,
      entregapersonalizada,
      isativo
    } = req.body;    
    try {     
     
        const cliente = await Config.create({ 
         setor_id, 
          name,
          cargo,
          enviaofocio,
          definedespesa,
          entregapersonalizada,
          isativo });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar o Config',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  { 
      id,
      setor_id,
      name,
      cargo,
      enviaofocio,
      definedespesa,
      entregapersonalizada,
      isativo
    } = req.body;
    
    try {
      const Conf = await Config.findByPk(id);

      if(!Conf){
          res.status(400).json({ error : "Config não encontrado",success:false });
        
        } 
        console.log("setot"+Config.id)
      await Config.update({ 
          setor_id, 
          name,
          cargo,
          enviaofocio,
          definedespesa,
          entregapersonalizada,
          isativo        
      }, {
        where: {
          id: id
        }
      });
      const atualizada = await Config.findOne({ where : {id : id }});
      return res.status(200).json({
        success: true,     
        data: atualizada,
        message: 'Config atualizado com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar o Config',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const Conf = await Config.findByPk(id);
      if(!Conf){
          res.status(400).json({ error : "Config não encontrado" });
        
        } 
        await Config.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:Config,
            message: 'Config excluído com sucesso'
        });
    } 
    catch(e) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Erro ao Excluir o Config',
            error: error
        });
    }
  },
};