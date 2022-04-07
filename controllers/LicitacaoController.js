const Licitacao = require('../models/licitacao');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const licitacoes = await Licitacao.findAll();        
      return res.status(201).json(licitacoes);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os licitacoes',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const licitacoes = await Licitacao.findByPk(id)     
      if (!licitacoes) {
        return res.status(404).json({ 
          message: 'Licitacao not found',success:false
         });
      }
      return res.status(201).json(licitacoes);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os licitacoes',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { cidade_id, processo,edital,objeto,alias,prazo,homologado_at,isativo } = req.body; 
   
    try {      
      const city = await Licitacao.findOne({ where : {processo : processo }});
      if(city){
        res.status(400).json({ error : "Licitacao já registrada",success:false });
      }
        const cliente = await Licitacao.create({cidade_id, processo,edital,objeto,alias,prazo,homologado_at,isativo  });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar a licitacão',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id,cidade_id, processo,edital,objeto,alias,prazo,homologado_at,isativo } = req.body;
    
    try {
      const cate = await Licitacao.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Licitacao não encontrada",success:false });
        
        } 
       
        /*

      const cat = await Licitacao.findOne({ where : {name : name }});     
      if(cat){
          res.status(400).json({ error : "Licitacao Já foi Cadastrada",success:false });
        
        } 
        */
        
      await Licitacao.update({ 
        cidade_id, processo,edital,objeto,alias,prazo,homologado_at,isativo  }, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Licitacao.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Licitacao atualizada com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar a licitacão',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const cidade = await Licitacao.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Licitacao não encontrado" });
        
        } 
        await Licitacao.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:cidade,
            message: 'Licitacao excluída com sucesso'
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