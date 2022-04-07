const { Model, DataTypes } = require('sequelize');

class Pnae extends Model {
  static init(sequelize) {
    super.init({
      ano: DataTypes.INTEGER,      
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'pnae',
    })
  }
  static associate(models) {    
    this.belongsTo(models.Cidade, { foreignKey: 'cidade_id', as: 'cidade_pnae' }); 
    this.belongsTo(models.Nivel, { foreignKey: 'nivel_id', as: 'nivel_pnae' }); 
  }

  
}

module.exports = Pnae;