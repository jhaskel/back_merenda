const Cidade = require('../models/Cidade');
module.exports = {     
  
  async index(req, res) {   
    console.log("aqui2")
    
    try {
      const clientes = await Cidade.findAll();        
      return res.status(201).json(clientes);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os Usuarios',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const clientes = await Cidade.findByPk(id)     
      if (!clientes) {
        return res.status(404).json({ 
          message: 'Cidade not found',success:false
         });
      }
      return res.status(201).json(clientes);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os Usuarios',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { name, logo,isativo } = req.body; 
   
    try {      
      const city = await Cidade.findOne({ where : {name : name }});
      if(city){
        res.status(400).json({ error : "Cidade já registrada",success:false });
      }
        const cliente = await Cidade.create({ name, logo,isativo });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar a cidade',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id,name,logo,isativo } = req.body;
    
    try {
      const cate = await Cidade.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Cidade não encontrada",success:false });
        
        }            
      await Cidade.update({ 
        name,logo,isativo }, {
        where: {
          id: id
        }
      });
      const atualizada = await Cidade.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: atualizada,
        message: 'Cidade atualizada com sucesso'
    });
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar a cidade',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const cidade = await Cidade.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Cidade não encontrado" });
        
        } 
        await Cidade.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:cidade,
            message: 'Cidade excluída com sucesso'
        });
    } 
    catch(e) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Erro ao Excluir a cidade',
            error: error
        });
    }
  },
};