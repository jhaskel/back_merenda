const { Model, DataTypes } = require('sequelize');

class Setor extends Model {
  static init(sequelize) {
    super.init({
        
        name: DataTypes.STRING,    

    }, {
      sequelize,
      tableName: 'setores',
    })
  }
  static associate(models) {  
    this.belongsTo(models.Cidade, { foreignKey: 'cidade_id', as: 'cidade' });
    this.hasMany(models.Config, { foreignKey: 'setor_id', as: 'setor_config' }); 
    this.hasMany(models.Nivel, { foreignKey: 'setor_id', as: 'setor_nivel' }); 
    this.hasMany(models.Escola, { foreignKey: 'setor_id', as: 'setor_escola' });
    this.hasMany(models.Cardapio, { foreignKey: 'setor_id', as: 'setor_cardapio' });    
    this.hasMany(models.Contabilidade, { foreignKey: 'setor_id', as: 'setor_conta' }); 
    this.hasMany(models.Estoque, { foreignKey: 'setor_id', as: 'setor_estoque' });
    this.belongsToMany(models.Estoque, { foreignKey: 'setor_id', through: 'estoque_setor', as: 'estoques' });
    this.hasMany(models.Itens, { foreignKey: 'setor_id', as: 'setor_itens' });
    this.hasMany(models.Pedido, { foreignKey: 'setor_id', as: 'setor_pedidos' });
    this.hasMany(models.Ordem, { foreignKey: 'setor_id', as: 'setor_ordem' });
   // this.hasMany(models.OrdemPedidos, { foreignKey: 'setor_id', as: 'setor_ordem_pedidos' });
   this.hasMany(models.User, { foreignKey: 'setor_id', as: 'setor_users'});
  
    
    
  }
  
}

module.exports = Setor;