'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fornecedores', { 
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
      alias: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      celular: {
        type: Sequelize.STRING,
        allowNull: true,
      }, 
      email: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('fornecedores');
  }
};
