'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('config', { 
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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },    
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },  
      enviaofocio: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      definedespesa: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }, 
      entregapersonalizada: {
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
    return queryInterface.dropTable('config');
  }
};
