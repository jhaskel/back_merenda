const Status = require('../models/status');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const status = await Status.findAll();        
      return res.status(201).json(status);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os status',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const status = await Status.findByPk(id)     
      if (!status) {
        return res.status(404).json({ 
          message: 'Status not found',success:false
         });
      }
      return res.status(201).json(status);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter o status',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { name } = req.body; 
   
    try {      
      const city = await Status.findOne({ where : {name : name }});
      if(city){
        res.status(400).json({ error : "Status já registrado",success:false });
      }
        const cliente = await Status.create({name });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar o status',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id,name} = req.body;
    
    try {
      const cate = await Status.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Status não encontrado",success:false });
        
        } 
        console.log('nome '+name)
      
        
      await Status.update({ 
        name }, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Status.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Status atualizado com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar o status',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const status = await Status.findByPk(id);
      if(!status){
          res.status(400).json({ error : "Status não encontrado" });
        
        } 
        await Status.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:status,
            message: 'Status excluída com sucesso'
        });
    } 
    catch(e) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Erro ao Excluir a status',
            error: error
        });
    }
  },
};