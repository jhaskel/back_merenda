const Fornecedor = require('../models/fornecedor');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const fornecedores = await Fornecedor.findAll();        
      return res.status(201).json(fornecedores);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os fornecedores',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const fornecedores = await Fornecedor.findByPk(id)     
      if (!fornecedores) {
        return res.status(404).json({ 
          message: 'Fornecedor not found',success:false
         });
      }
      return res.status(201).json(fornecedores);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os fornecedores',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { name,alias, cnpj,celular,email,isativo } = req.body; 
   
    try {      
      const city = await Fornecedor.findOne({ where : {name : name }});
      if(city){
        res.status(400).json({ error : "Fornecedor já registrado",success:false });
      }
        const cliente = await Fornecedor.create({ name,alias, cnpj,celular,email,isativo });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar o fornecedor',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id, name, alias,cnpj,celular,email,isativo} = req.body;
    
    try {
      const cate = await Fornecedor.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Fornecedor não encontrado",success:false });
        
        } 
        console.log('nome '+name)
        /*

      const cat = await Fornecedor.findOne({ where : {name : name }});     
      if(cat){
          res.status(400).json({ error : "Fornecedor Já foi Cadastrada",success:false });
        
        } 
        */
        
      await Fornecedor.update({ 
        name,alias, cnpj,celular,email,isativo }, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Fornecedor.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Fornecedor atualizado com sucesso'
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
      const cidade = await Fornecedor.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Fornecedor não encontrado" });
        
        } 
        await Fornecedor.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:cidade,
            message: 'Fornecedor excluída com sucesso'
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