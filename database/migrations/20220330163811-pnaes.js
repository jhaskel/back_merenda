'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pnae', { 
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
      },
      nivel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'niveis', key: 'id' },       
      },
      
      ano: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('pnae');
  }
};
