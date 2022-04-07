const { Model, DataTypes } = require('sequelize');

class Itens extends Model {
  static init(sequelize) {
    super.init({
      ano: DataTypes.INTEGER,
      ordem: DataTypes.INTEGER,
      pedido: DataTypes.INTEGER,
      quantidade: DataTypes.DOUBLE,
      valor: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      mes: DataTypes.STRING,
      ano: DataTypes.INTEGER,
      agro_familiar: DataTypes.BOOLEAN,
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'itens',
    })
  }
  static associate(models) {

    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor_itens' });
    this.belongsTo(models.Escola, { foreignKey: 'escola_id', as: 'escola_itens' });
    this.belongsTo(models.Estoque, { foreignKey: 'estoque_id', as: 'estoque_itens' });    
    this.belongsTo(models.Nivel, { foreignKey: 'nivel_id', as: 'nivel_itens' });
    this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status_itens' });
    this.belongsTo(models.Produto, { foreignKey: 'produto_id', as: 'produto_itens' });
    this.belongsTo(models.Categoria, { foreignKey: 'categoria_id', as: 'categoria_itens' });
    this.belongsTo(models.Fornecedor, { foreignKey: 'fornecedor_id', as: 'fornecedor_itens' });
    this.belongsTo(models.Licitacao, { foreignKey: 'licitacao_id', as: 'licitacao_itens' });


    

  }


}

module.exports = Itens;