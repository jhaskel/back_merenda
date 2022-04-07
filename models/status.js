const { Model, DataTypes } = require('sequelize');

class Status extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,      
    }, {
      sequelize,
      tableName: 'status',
    })
  } 
  static associate(models) {    
   this.hasMany(models.Itens, { foreignKey: 'status_id', as: 'status_itens' });   
   this.hasMany(models.Pedido, { foreignKey: 'status_id', as: 'status_pedidos' });
   this.hasMany(models.Ordem, { foreignKey: 'status_id', as: 'status_ordem' });
  }

}

module.exports = Status;