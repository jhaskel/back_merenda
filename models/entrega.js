const { Model, DataTypes } = require('sequelize');

class Entrega extends Model {
  static init(sequelize) {
    super.init({
      code: DataTypes.INTEGER,
      dia: DataTypes.DATE,
      quantidade: DataTypes.DOUBLE,  
      valor: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,     
      is_recebido: DataTypes.BOOLEAN,
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'entregas',
    })
  }
  static associate(models) {

    this.belongsTo(models.Ordem, { foreignKey: 'ordem_id', as: 'ordem_entrega' });
    this.belongsTo(models.Escola, { foreignKey: 'escola_id', as: 'escola_entrega' });
    this.belongsTo(models.Estoque, { foreignKey: 'estoque_id', as: 'estoque_entrega' });
    this.belongsTo(models.Pedido, { foreignKey: 'pedido_id', as: 'pedido_enterga' });
    
    

  }


}

module.exports = Entrega;