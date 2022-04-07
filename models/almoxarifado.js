const { Model, DataTypes } = require('sequelize');

class Almoxarifado extends Model {
  static init(sequelize) {
    super.init({     
      quantidade: DataTypes.DOUBLE, 
      is_troca: DataTypes.BOOLEAN,
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'almoxarifado',
    })
  }
  static associate(models) {
    
    this.belongsTo(models.Escola, { foreignKey: 'escola_id', as: 'escola_almo' });
    this.belongsTo(models.Estoque, { foreignKey: 'estoque_id', as: 'estoque_almo' });
    this.belongsTo(models.Licitacao, { foreignKey: 'licitacao_id', as: 'pedido_almo' });
    
    

  }


}

module.exports = Almoxarifado;