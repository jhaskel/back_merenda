'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('licitacao', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cidades', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },   
      processo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      edital: {
        type: Sequelize.STRING,
        allowNull: false,
      },        
      objeto: {
        type: Sequelize.TEXT,
        allowNull: false,
      },      
      alias: {
        type: Sequelize.INTEGER,
        allowNull: true,
      }, 
      prazo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      homologado_at: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('licitacao');
  }
};
