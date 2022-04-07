const Produto = require('../models/produtos');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const produtos = await Produto.findAll();        
      return res.status(201).json(produtos);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os produtos',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const produtos = await Produto.findByPk(id)     
      if (!produtos) {
        return res.status(404).json({ 
          message: 'Produto not found',success:false
         });
      }
      return res.status(201).json(produtos);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os produtos',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { name, alias,unidade } = req.body; 
   
    try {      
      const city = await Produto.findOne({ where : {name : name }});
      if(city){
        res.status(400).json({ error : "Produto já registrada",success:false });
      }
        const cliente = await Produto.create({name, alias,unidade });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar o produto',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id,name, alias,unidade} = req.body;
    
    try {
      const cate = await Produto.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Produto não encontrada",success:false });
        
        } 
        console.log('nome '+name)
        /*

      const cat = await Produto.findOne({ where : {name : name }});     
      if(cat){
          res.status(400).json({ error : "Produto Já foi Cadastrada",success:false });
        
        } 
        */
        
      await Produto.update({ 
        name, alias,unidade }, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Produto.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Produto atualizado com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar o produto',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const cidade = await Produto.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Produto não encontrado" });
        
        } 
        await Produto.destroy({
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
            message: 'Erro ao Excluir a cidade',
            error: error
        });
    }
  },
};