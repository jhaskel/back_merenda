const Itens = require('../models/itens');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const itens = await Itens.findAll();        
      return res.status(201).json(itens);
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
      const itens = await Itens.findByPk(id)     
      if (!itens) {
        return res.status(404).json({ 
          message: 'Produtos not found',success:false
         });
      }
      return res.status(201).json(itens);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os produtos comprados',
          error: error,
          success: false
      })
  } 
   
  },
  async findBySetor(req, res) {
    var setor = req.params.setor;
    console.log('setor'+setor);
    try {
      
      const setoor = await Itens.findAll({
         where : {setor_id : setor },
         include: [
           { association: 'setor_itens',  attributes: ['name'],  },
           { association: 'escola_itens',  attributes: ['name'],  },
           { association: 'estoque_itens',  attributes: ['code'],  },
           { association: 'nivel_itens',  attributes: ['name'],  },
           { association: 'status_itens',  attributes: ['name'],  },
           { association: 'produto_itens',  attributes: ['alias'],  },
           { association: 'categoria_itens',  attributes: ['name'],  },
           { association: 'fornecedor_itens',  attributes: ['name'],  },
           { association: 'licitacao_itens',  attributes: ['processo'],  },
           
          ],
            
        
        }
         ); 
      if (!setoor) {
        return res.status(404).json({ 
          message: 'Setor not found',success:false
         });
      }
      return res.status(201).json(setoor);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter os itens',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { setor_id, escola_id,estoque_id,produto_id,categoria_id,fornecedor_id,licitacao_id,nivel_id,status_id,ano,ordem,pedido,quantidade,valor,total,mes,agro_familiar,isativo } = req.body; 
   
    try {      
      
        const cliente = await Itens.create({setor_id, escola_id,estoque_id,produto_id,categoria_id,fornecedor_id,licitacao_id,nivel_id,status_id,ano,ordem,pedido,quantidade,valor,total,mes,agro_familiar,isativo });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar os produtos',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  {id,setor_id, escola_id,estoque_id,produto_id,categoria_id,fornecedor_id,licitacao_id,nivel_id,status_id,ano,ordem,pedido,quantidade,valor,total,mes,agro_familiar,isativo} = req.body;
    
    try {
      const cate = await Itens.findByPk(id);
      if(!cate){
          res.status(400).json({ error : "Produtos não encontrado",success:false });
        
        } 
     
       
      await Itens.update({ 
        setor_id, escola_id,estoque_id,produto_id,categoria_id,fornecedor_id,licitacao_id,nivel_id,status_id,ano,ordem,pedido,quantidade,valor,total,mes,agro_familiar,isativo}, {
        where: {
          id: id
        }
      });
      const catAtualizada = await Itens.findOne({ where : {id : id }});

      return res.status(200).json({
        success: true,     
        data: catAtualizada,
        message: 'Produtos atualizado com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar o Produto',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const cidade = await Itens.findByPk(id);
      if(!cidade){
          res.status(400).json({ error : "Produto não encontrado" });
        
        } 
        await Itens.destroy({
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
            message: 'Erro ao Excluir o produto',
            error: error
        });
    }
  },
};