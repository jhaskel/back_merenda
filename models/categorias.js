const { Model, DataTypes } = require('sequelize');

class Categoria extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      icone: DataTypes.INTEGER,
      is_alimento: DataTypes.BOOLEAN,
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName:"categorias"
    })
  }
  static associate(models) {    
    this.hasMany(models.Estoque, { foreignKey: 'categoria_id', as: 'categoria_estoque' });
    this.hasMany(models.Itens, { foreignKey: 'categoria_id', as: 'categoria_itens' });
  }

}

module.exports = Categoria;