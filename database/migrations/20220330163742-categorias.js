'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categorias', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },  
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },    
      icone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      is_alimento: {
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
    return queryInterface.dropTable('categorias');
  }
};
