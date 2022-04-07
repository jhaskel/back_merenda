const { Model, DataTypes } = require('sequelize');

class Ordem extends Model {
  static init(sequelize) {
    super.init({   
      code: DataTypes.INTEGER,     
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'ordens'
    })
  }

  static associate(models) {
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor_ordem'});
    this.belongsTo(models.Licitacao, { foreignKey: 'licitacao_id', as: 'licitacao_ordem'});
    this.belongsTo(models.Fornecedor, { foreignKey: 'fornecedor_id', as: 'fornecedor_ordem'});   
    this.belongsTo(models.Nivel, { foreignKey: 'nivel_id', as: 'nivel_ordem'});   
    this.belongsTo(models.Contabilidade, { foreignKey: 'despesa_id', as: 'despesa_ordem'});   
    this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status_ordem'});
    this.belongsToMany(models.Pedido, { foreignKey: 'ordem_id', through: 'ordem_pedidos', as: 'pedidos'});    
    this.belongsToMany(models.Ordem, {foreignKey: 'pedido_id', through: 'ordem_pedidos', as: 'ordens'});
    this.hasMany(models.Entrega, { foreignKey: 'ordem_id', as: 'ordem_entrega' });
  
   
    
  
   

  }

}

module.exports = Ordem;