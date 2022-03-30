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

}

module.exports = Cidade;