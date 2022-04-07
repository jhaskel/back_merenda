const { Model, DataTypes } = require('sequelize');

class Fornecedor extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      alias: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      celular: DataTypes.STRING,
      email: DataTypes.INTEGER,      
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName:"fornecedores"
    })
  }
  static associate(models) {    
    this.hasMany(models.Estoque, { foreignKey: 'fornecedor_id', as: 'fornecedor_estoque' });
    this.hasMany(models.Ordem, { foreignKey: 'fornecedor_id', as: 'fornecedor_ordem' }); 
  // this.hasMany(models.OrdemPedidos, { foreignKey: 'fornecedor_id', as: 'fornecedor_ordem_pedidos' });   
  this.hasMany(models.Itens, { foreignKey: 'fornecedor_id', as: 'fornecedor_itens' });
   
  }

}

module.exports = Fornecedor;