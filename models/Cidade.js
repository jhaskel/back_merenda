const { Model, DataTypes } = require('sequelize');

class Cidade extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'cidade_id', as: 'setores' });   
  }

}

module.exports = Cidade;