const { Model, DataTypes } = require('sequelize');

class Licitacao extends Model {
  static init(sequelize) {
    super.init({
      processo: DataTypes.STRING,
      edital: DataTypes.STRING,
      objeto: DataTypes.STRING,
      alias: DataTypes.STRING,     
      prazo: DataTypes.INTEGER,          
      homologado_at: DataTypes.DATE,     
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'licitacao',
    })
  }
  static associate(models) {       
    this.belongsTo(models.Cidade, { foreignKey: 'cidade_id', as: 'cidade_licitacao' }); 
    this.hasMany(models.Estoque, { foreignKey: 'licitacao_id', as: 'licitacao_estoque' });
    this.hasMany(models.Ordem, { foreignKey: 'licitacao_id', as: 'licitacao_ordem' });
    this.hasMany(models.Almoxarifado, { foreignKey: 'licitacao_id', as: 'pedido_almo' });
    this.hasMany(models.Itens, { foreignKey: 'licitacao_id', as: 'licitacao_itens' });


  }

  
}

module.exports = Licitacao;