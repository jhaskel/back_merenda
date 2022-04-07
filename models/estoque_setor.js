const { Model, DataTypes } = require('sequelize');

class EstoqueSetor extends Model {
  static init(sequelize) {
    super.init({      
      quantidade: DataTypes.DOUBLE, 
      isativo: DataTypes.BOOLEAN, 
       
    }, {
      sequelize
    })
  }
  static associate(models) {    
    this.belongsToMany(models.Setor, {foreignKey: 'estoque_id', through: 'estoque_setor', as: 'setores' });
    this.belongsToMany(models.Estoque, {foreignKey: 'setor_id', through: 'estoque_setor', as: 'estoques' });
  }

  
}

module.exports = EstoqueSetor;