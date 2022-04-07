'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cart', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
    return queryInterface.dropTable('cart');
  }
};

