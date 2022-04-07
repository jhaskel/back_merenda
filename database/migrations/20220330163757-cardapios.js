'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cardapio', { 
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
      },
      escola_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'escolas', key: 'id' },       
      }, 
      imagem: {
        type: Sequelize.STRING,
        allowNull: false,
      },      
      title: {
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
    return queryInterface.dropTable('cardapio');
  }
};
