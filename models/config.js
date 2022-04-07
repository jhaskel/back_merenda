const { Model, DataTypes } = require('sequelize');

class Config extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      cargo: DataTypes.STRING,      
      enviaofocio: DataTypes.BOOLEAN,
      definedespesa: DataTypes.BOOLEAN,
      entregapersonalizada: DataTypes.BOOLEAN,
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'config',
    })
  }
  static associate(models) {    
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor_config' }); 
  }

  
}

module.exports = Config;