const Pnae = require('../models/pnae');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const pnaes = await Pnae.findAll();        
      return res.status(201).json(pnaes);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os pnaes',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const pnaes = await Pnae.findByPk(id)     
      if (!pnaes) {
        return res.status(404).json({ 
          message: 'Pnae not found',success:false
         });
      }
      return res.status(201).json(pnaes);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os pnaes',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const {cidade_id, nivel_id,ano,isativo } = req.body; 
   
    try {      
      
        const cliente = await Pnae.create({cidade_id, nivel_id,ano,isativo });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar a pnae',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id,cidade_id, nivel_id,ano,isativo} = req.body;
    
    try {
      const cate = await Pnae.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Pnae não encontrada",success:false });
        
        } 
       
        /*

      const cat = await Pnae.findOne({ where : {name : name }});     
      if(cat){
          res.status(400).json({ error : "Pnae Já foi Cadastrada",success:false });
        
        } 
        */
        
      await Pnae.update({ 
        cidade_id, nivel_id,ano,isativo }, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Pnae.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Pnae atualizada com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar a pnae',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const cidade = await Pnae.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Pnae não encontrado" });
        
        } 
        await Pnae.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:cidade,
            message: 'Pnae excluída com sucesso'
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