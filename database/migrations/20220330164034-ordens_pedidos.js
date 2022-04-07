'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ordem_pedidos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },       
      ordem_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'ordens', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pedidos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      setor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'setores', key: 'id' },
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
      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
              
      total: {
        type: Sequelize.DOUBLE(10,2),
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
    return queryInterface.dropTable('ordem_pedidos');
  }
};
