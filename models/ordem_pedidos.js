const { Model, DataTypes } = require('sequelize');

class OrdemPedidos extends Model {
  static init(sequelize) {
    super.init({   
    
      code: DataTypes.INTEGER, 
      total: DataTypes.DOUBLE, 
       
    }, {
      sequelize,
      tableName:'ordem_pedidos'
    })
  }
  static associate(models) {     
    this.belongsToMany(models.Pedido, { foreignKey: 'ordem_id', through: 'ordem_pedidos', as: 'pedidos' });    
    this.belongsToMany(models.Ordem, {foreignKey: 'pedido_id', through: 'ordem_pedidos', as: 'ordens' });
    this.belongsToMany(models.Setor, { foreignKey: 'setor_id', as: 'setor_ordem_pedidos' });
   this.belongsTo(models.Fornecedor, { foreignKey: 'fornecedor_id', as: 'fornecedor_ordem_pedidos' });   
  

  }

  
}

module.exports = OrdemPedidos;