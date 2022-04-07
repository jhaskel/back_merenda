'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contabilidade', { 
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
      nivel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'niveis', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      orgao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },    
      nome_orgao: {
        type: Sequelize.STRING,
        allowNull: false,
      },      
      unidade: {
        type: Sequelize.INTEGER,
        allowNull: true,
      }, 
      nome_unidade: {
        type: Sequelize.STRING,
        allowNull: true,
      },  
      projeto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nome_projeto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_receita: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cod: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      elemento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orcamento: {
        type: Sequelize.DOUBLE(10, 2),
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
    return queryInterface.dropTable('contabilidade');
  }
};
