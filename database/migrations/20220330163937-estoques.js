'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estoques', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'produtos', key: 'id' },
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
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'categorias', key: 'id' },
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
      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },             
     
      valor: {
        type: Sequelize.DOUBLE(10,2),
        allowNull: true,
      },  
      agro_familiar: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    return queryInterface.dropTable('estoques');
  }
};
