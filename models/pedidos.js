const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
  static init(sequelize) {
    super.init({   
      total: DataTypes.DOUBLE,
      is_ordem: DataTypes.BOOLEAN,      
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'pedidos'
    })
  }

  static associate(models) {
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor_pedidos' });
    this.belongsTo(models.Escola, { foreignKey: 'escola_id', as: 'escola_pedidos' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users_pedidos' });   
    this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status_pedidos' });
    this.belongsToMany(models.Ordem, {foreignKey: 'pedido_id', through: 'ordem_pedidos', as: 'ordens' });
    this.hasMany(models.Entrega, { foreignKey: 'pedido_id', as: 'pedido_enterga' });

  }


}

module.exports = Pedido;