const Ordem = require('../models/ordens');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const ordens = await Ordem.findAll();        
      return res.status(201).json(ordens);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as ordens',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const ordens = await Ordem.findByPk(id)     
      if (!ordens) {
        return res.status(404).json({ 
          message: 'Ordem not found',success:false
         });
      }
      return res.status(201).json(ordens);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as ordens',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { setor_id, licitacao_id,fornecedor_id,nivel_id,despesa_id,status_id,code,isativo } = req.body; 
   
    try {      
      const city = await Ordem.findOne({ where : {code : code }});
      if(city){
        res.status(400).json({ error : "Ordem já registrada",success:false });
      }
        const cliente = await Ordem.create({setor_id, licitacao_id,fornecedor_id,nivel_id,despesa_id,status_id,code,isativo });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar a ordem',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id,setor_id, licitacao_id,fornecedor_id,nivel_id,despesa_id,status_id,code,isativo} = req.body;
    
    try {
      const cate = await Ordem.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Ordem não encontrada",success:false });
        
        } 
      
      
        
      await Ordem.update({ 
        setor_id, licitacao_id,fornecedor_id,nivel_id,despesa_id,status_id,code,isativo }, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Ordem.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Ordem atualizada com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar a ordem',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const cidade = await Ordem.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Ordem não encontrada" });
        
        } 
        await Ordem.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:cidade,
            message: 'Ordem excluída com sucesso'
        });
    } 
    catch(e) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Erro ao Excluir a ordem',
            error: error
        });
    }
  },
};