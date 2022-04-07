'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('entregas', { 
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
      escola_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'escolas', key: 'id' },
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
      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      dia: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
      quantidade: {
        type: Sequelize.DOUBLE(10,2),
        allowNull: false,
      },
      valor: {
        type: Sequelize.DOUBLE(10,2),
        allowNull: false,
      }, 
      total: {
        type: Sequelize.DOUBLE(10,2),
        allowNull: false,
      },         
     
      is_recebido: {
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
    return queryInterface.dropTable('entregas');
  }
};
