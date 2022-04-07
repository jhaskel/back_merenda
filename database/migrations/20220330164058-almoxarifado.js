'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('almoxarifado', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      escola_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'escolas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      licitacao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'licitacao', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }, 
      estoque_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'estoques', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }, 
      quantidade: {
        type: Sequelize.DOUBLE(10,1),
        allowNull: false,
      },  
        
      is_troca: {
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
    return queryInterface.dropTable('almoxarifado');
  }
};
