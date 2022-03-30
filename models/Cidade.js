const { Model, DataTypes } = require('sequelize');

class Cidade extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      icone: DataTypes.STRING,
    }, {
      sequelize
    })
  }

}

module.exports = Cidade;