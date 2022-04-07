const Contabilidade = require('../models/contabilidade');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const despesas = await Contabilidade.findAll();        
      return res.status(201).json(despesas);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os despesas',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const despesas = await Contabilidade.findByPk(id)     
      if (!despesas) {
        return res.status(404).json({ 
          message: 'Contabilidade not found',success:false
         });
      }
      return res.status(201).json(despesas);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os despesas',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { setor_id, nivel_id,orgao,nome_orgao,unidade,nome_unidade,projeto,nome_projeto,nome_receita,cod,code,elemento,orcamento,isativo } = req.body; 
   
    try {      
     
        const cliente = await Contabilidade.create({setor_id, nivel_id,orgao,nome_orgao,unidade,nome_unidade,projeto,nome_projeto,nome_receita,cod,code,elemento,orcamento,isativo });     
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
    const  {id,setor_id, nivel_id,orgao,nome_orgao,unidade,nome_unidade,projeto,nome_projeto,nome_receita,cod,code,elemento,orcamento,isativo} = req.body;
    
    try {
      const cate = await Contabilidade.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Contabilidade não encontrada",success:false });
        
        } 
        
        /*

      const cat = await Contabilidade.findOne({ where : {name : name }});     
      if(cat){
          res.status(400).json({ error : "Contabilidade Já foi Cadastrada",success:false });
        
        } 
        */
        
      await Contabilidade.update({ 
        setor_id, nivel_id,orgao,nome_orgao,unidade,nome_unidade,projeto,nome_projeto,nome_receita,cod,code,elemento,orcamento,isativo }, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Contabilidade.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Contabilidade atualizada com sucesso'
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
      const cidade = await Contabilidade.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Contabilidade não encontrado" });
        
        } 
        await Contabilidade.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:cidade,
            message: 'Contabilidade excluída com sucesso'
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