const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      alias: DataTypes.INTEGER,
      unidade: DataTypes.STRING,     
    }, {
      sequelize
    })
  }
  static associate(models) {    
    this.hasMany(models.Estoque, { foreignKey: 'produto_id', as: 'produto_estoque' });
    this.hasMany(models.Itens, { foreignKey: 'produto_id', as: 'produto_itens' });
   
  }

}

module.exports = Produto;