const Estoque = require('../models/estoque');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const estoques = await Estoque.findAll();        
      return res.status(201).json(estoques);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os estoques',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const estoque = await Estoque.findByPk(id)     
      if (!estoque) {
        return res.status(404).json({ 
          message: 'Estoque not found',success:false
         });
      }
      return res.status(201).json(estoque);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os estoques',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { produto_id, setor_id,fornecedor_id,categoria_id,licitacao_id,code,valor,agro_familiar,ano,isativo    } = req.body; 
   
    try {      
     
        const cliente = await Estoque.create({produto_id, setor_id,fornecedor_id,categoria_id,licitacao_id,code,valor,agro_familiar,ano,isativo });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar a estoque',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id,produto_id, setor_id,fornecedor_id,categoria_id,licitacao_id,code,valor,agro_familiar,ano,isativo} = req.body;
    
    try {
      const cate = await Estoque.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Estoque não encontrado",success:false });
        
        } 
       
        
      await Estoque.update({ 
        produto_id, setor_id,fornecedor_id,categoria_id,licitacao_id,code,valor,agro_familiar,ano,isativo }, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Estoque.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Estoque atualizado com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar o estoque',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const cidade = await Estoque.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Estoque não encontrado" });
        
        } 
        await Estoque.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:cidade,
            message: 'Estoque excluído com sucesso'
        });
    } 
    catch(e) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Erro ao Excluir o estoque',
            error: error
        });
    }
  },
};