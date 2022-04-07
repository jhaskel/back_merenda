const Escola = require('../models/escolas');
module.exports = {     
  
  async getAll(req, res) {   
    console.log("aqui2")
    
    try {
      const escol = await Escola.findAll();        
      return res.status(201).json(escol);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as escolas',
          error: error,
          success: false
      })
  }      
  },

  async findById(req, res) {
    var id = req.params.id;
    try {
      const escolass = await Escola.findByPk(id)     
      if (!escolass) {
        return res.status(404).json({ 
          message: 'Escola não encontrada',success:false
         });
      }
      return res.status(201).json(escolass);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as escolas',
          error: error,
          success: false
      })
  } 
   
  },

  async findBySetor(req, res) {
    var setor = req.params.setor;
    try {
      
      const escolass = await Escola.findAll({ where : {setor_id : setor }}); 
      if (!escolass) {
        return res.status(404).json({ 
          message: 'Escola não encontrada',success:false
         });
      }
      return res.status(201).json(escolass);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as escolas',
          error: error,
          success: false
      })
  } 
   
  },
  async findByNiveis(req, res) {
    var nivel = req.params.nivel;
    try {
      
      const escolass = await Escola.findAll({ 
        where : {nivel_id : nivel },
        include: { association: 'nivel_escola' }
      }); 
      if (!escolass) {
        return res.status(404).json({ 
          message: 'Escola não encontrada',success:false
         });
      }
      return res.status(201).json(escolass);
  } 
  catch (error) {
      console.log(`Error ${error}`);    
      return res.status(501).json({
          message: 'Houve um erro em obter as escolas',
          error: error,
          success: false
      })
  } 
   
  },

  async create(req, res) {
    const { 
      setor_id,
      nivel_id,
      name,
      alias,
      address,
      bairro,
      alunos,
      is_escola,
      isativo
    } = req.body;    
    try {     
     
        const cliente = await Escola.create({ 
          setor_id,
          nivel_id,
          name,
          alias,
          address,
          bairro,
          alunos,
          is_escola,
          isativo
    });     
        return res.status(200).json({
          success: true,     
          data: cliente,
          message: 'Cadastro Realizado com sucesso'
      });            
      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao adicionar a escola',
          error: error
      });
      
    }   
    
  },
  async update(req, res, next) {
    const  { 
      id,
      setor_id,
      nivel_id,
      name,
      alias,
      address,
      bairro,
      alunos,
      is_escola,
      isativo
    } = req.body;
    
    try {
      const Conf = await Escola.findByPk(id);

      if(!Conf){
          res.status(400).json({ error : "Escola não encontrada",success:false });
        
        } 
        
      await Escola.update({ 
        setor_id,
        setor_id,
        nivel_id,
        name,
        alias,
        address,
        bairro,
        alunos,
        is_escola,
        isativo      
      }, {
        where: {
          id: id
        }
      });
    
      return res.status(200).json({
        success: true,     
        data: Escola,
        message: 'Escola atualizado com sucesso'
    });


      
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
          success: false,
          message: 'Erro ao atualizar o Escola',
          error: error
      });
      
    }
    
   
  },

  async delete(req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
   
    try {   
      const Conf = await Escola.findByPk(id);
      if(!Conf){
          res.status(400).json({ error : "Escola não encontrado" });
        
        } 
        await Escola.destroy({
          where: {
            id: id
          }
        });    
        return res.status(201).json({
            success: true,
            data:Escola,
            message: 'Escola excluído com sucesso'
        });
    } 
    catch(e) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Erro ao Excluir o Escola',
            error: error
        });
    }
  },
};