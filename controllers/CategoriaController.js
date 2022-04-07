const Categoria = require('../models/categorias');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const categorias = await Categoria.findAll();        
      return res.status(201).json(categorias);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os categorias',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const categorias = await Categoria.findByPk(id)     
      if (!categorias) {
        return res.status(404).json({ 
          message: 'Categoria not found',success:false
         });
      }
      return res.status(201).json(categorias);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os categorias',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { name, icone,is_alimento,isativo } = req.body; 
   
    try {      
      const city = await Categoria.findOne({ where : {name : name }});
      if(city){
        res.status(400).json({ error : "Categoria já registrada",success:false });
      }
        const cliente = await Categoria.create({name, icone,is_alimento,isativo });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar a categoria',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id,name, icone,is_alimento,isativo} = req.body;
    
    try {
      const cate = await Categoria.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Categoria não encontrada",success:false });
        
        } 
        console.log('nome '+name)
        /*

      const cat = await Categoria.findOne({ where : {name : name }});     
      if(cat){
          res.status(400).json({ error : "Categoria Já foi Cadastrada",success:false });
        
        } 
        */
        
      await Categoria.update({ 
        name, icone,is_alimento,isativo }, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Categoria.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Categoria atualizada com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar a categoria',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const cidade = await Categoria.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Categoria não encontrado" });
        
        } 
        await Categoria.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:cidade,
            message: 'Categoria excluída com sucesso'
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