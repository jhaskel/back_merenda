'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('escolas', { 
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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },    
      alias: {
        type: Sequelize.STRING,
        allowNull: false,
      },      
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      }, 
      bairro: {
        type: Sequelize.STRING,
        allowNull: true,
      },  
      alunos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      is_escola: {
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
    return queryInterface.dropTable('escolas');
  }
};
