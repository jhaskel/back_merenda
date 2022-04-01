const { Model, DataTypes } = require('sequelize');

class Setor extends Model {
  static init(sequelize) {
    super.init({
        
        name: DataTypes.STRING,    

    }, {
      sequelize,
      tableName: 'setores',
    })
  }
  static associate(models) {
    this.belongsTo(models.Cidade, { foreignKey: 'cidade_id', as: 'cidade' });
  }
  
}

module.exports = Setor;