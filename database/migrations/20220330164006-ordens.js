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
      setor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'setores', key: 'id' },
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
      fornecedor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'fornecedores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nivel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'niveis', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      despesa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'contabilidade', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'status', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      
      code: {
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
    return queryInterface.dropTable('ordens');
  }
};
