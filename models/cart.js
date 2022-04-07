const { Model, DataTypes } = require('sequelize');

class Cart extends Model {
  static init(sequelize) {
    super.init({
      quantidade: DataTypes.DOUBLE,
      valor: DataTypes.DOUBLE, 
      total: DataTypes.DOUBLE,
    }, {
      sequelize,
      tableName: 'cart',
    })
  }
  static associate(models) {    
   
    this.belongsTo(models.Escola, { foreignKey: 'escola_id', as: 'escola_cart' }); 
    this.belongsTo(models.Estoque, { foreignKey: 'estoque_id', as: 'estoque_cart' }); 
    
  }

  
}

module.exports = Cart;