const { Model, DataTypes } = require('sequelize');

class Estoque extends Model {
  static init(sequelize) {
    super.init({
      code: DataTypes.INTEGER,
      valor: DataTypes.DOUBLE,
      agro_familiar: DataTypes.BOOLEAN,
      ano: DataTypes.INTEGER,
      isativo: DataTypes.BOOLEAN,

    }, {
      sequelize,
      tableName: 'estoques',
    })
  }
  static associate(models) {
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor_estoque' });
    this.belongsTo(models.Categoria, { foreignKey: 'categoria_id', as: 'categoria_estoque' });
    this.belongsTo(models.Fornecedor, { foreignKey: 'fornecedor_id', as: 'fornecedor_estoque' });
    this.belongsTo(models.Produto, { foreignKey: 'produto_id', as: 'produto_estoque' }); 
    this.belongsTo(models.Licitacao, { foreignKey: 'licitacao_id', as: 'licitacao_estoque' });
    this.belongsToMany(models.Setor, {foreignKey: 'estoque_id', through: 'estoque_setor', as: 'setores' });
    this.hasMany(models.Cart, { foreignKey: 'estoque_id', as: 'estoque_cart' }); 
    this.hasMany(models.Itens, { foreignKey: 'estoque_id', as: 'estoque_itens' });
    this.hasMany(models.Entrega, { foreignKey: 'estoque_id', as: 'estoque_entrega' });
    this.hasMany(models.Almoxarifado, { foreignKey: 'estoque_id', as: 'estoque_almo' });

   
  }


}

module.exports = Estoque;