'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ordens', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      setor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      licitacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fornecedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      despesa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      coddespesa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      codedespesa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isdespesa: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },       
      isenviado: {
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
    return queryInterface.dropTable('users');
  }
};
