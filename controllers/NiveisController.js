const Nivel = require('../models/niveis');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const niveiss = await Nivel.findAll();        
      return res.status(201).json(niveiss);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os Nivelurações',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const niveiss = await Nivel.findByPk(id)     
      if (!niveiss) {
        return res.status(404).json({ 
          message: 'Nivel not found',success:false
         });
      }
      return res.status(201).json(niveiss);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os Nivelurações',
          error: error,
          success: false
      })
  } 
   
  },

  async findBySetor(req, res) {
    var setor = req.params.setor;
    try {
      
      const niveiss = await Nivel.findAll({ where : {setor_id : setor }}); 
      if (!niveiss) {
        return res.status(404).json({ 
          message: 'Nivel not found',success:false
         });
      }
      return res.status(201).json(niveiss);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as Nivelurações',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { 
      setor_id,
      name,
      isativo
    } = req.body;    
    try {     
     
        const cliente = await Nivel.create({ 
          setor_id,
      name,
      isativo});     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar o Nivel',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  { 
      id,
      setor_id,
      name,
      isativo
    } = req.body;
    
    try {
      const Conf = await Nivel.findByPk(id);

      if(!Conf){
          res.status(400).json({ error : "Nivel não encontrado",success:false });
        
        } 
        console.log("setot"+Nivel.id)
      await Nivel.update({ 
        setor_id,
        name,
        isativo      
      }, {
        where: {
          id: id
        }
      });
    
      return res.status(200).json({
        success: true,     
        data: Nivel,
        message: 'Nivel atualizado com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar o Nivel',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const Conf = await Nivel.findByPk(id);
      if(!Conf){
          res.status(400).json({ error : "Nivel não encontrado" });
        
        } 
        await Nivel.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:Nivel,
            message: 'Nivel excluído com sucesso'
        });
    } 
    catch(e) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Erro ao Excluir o Nivel',
            error: error
        });
    }
  },
};