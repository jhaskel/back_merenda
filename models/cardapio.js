const { Model, DataTypes } = require('sequelize');

class Cardapio extends Model {
  static init(sequelize) {
    super.init({
      imagem: DataTypes.STRING,
      title: DataTypes.STRING, 
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'cardapio',
    })
  }
  static associate(models) {    
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor_cardapio' }); 
    this.belongsTo(models.Escola, { foreignKey: 'escola_id', as: 'escola_cardapio' }); 
  }

  
}

module.exports = Cardapio;