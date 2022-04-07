'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itens', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      setor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'setores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      escola_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'escolas', key: 'id' },       
      },
      estoque_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'estoques', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'produtos', key: 'id' },        
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'categorias', key: 'id' },       
      },
      fornecedor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'fornecedores', key: 'id' },        
      },
      licitacao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'licitacao', key: 'id' },        
      },
      nivel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'niveis', key: 'id' },       
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'status', key: 'id' },        
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },    
      ordem: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },      
      pedido: {
        type: Sequelize.INTEGER,
        allowNull: true,
      }, 
      quantidade: {
        type: Sequelize.DOUBLE(10,2),
        allowNull: false,
      },
      valor: {
        type: Sequelize.DOUBLE(10,2),
        allowNull: false,
      }, 
      total: {
        type: Sequelize.DOUBLE(10,2),
        allowNull: false,
      },      
      
      mes: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      agro_familiar: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },              
      isativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },                
     
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('itens');
  }
};
