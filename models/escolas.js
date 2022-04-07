const { Model, DataTypes } = require('sequelize');

class Escola extends Model {
  static init(sequelize) {
    super.init({        
        name: DataTypes.STRING,
        alias: DataTypes.STRING,
        address: DataTypes.STRING,
        bairro: DataTypes.STRING,
        alunos: DataTypes.INTEGER,
        is_escola: DataTypes.BOOLEAN,
        isativo: DataTypes.BOOLEAN,         

    }, {
      sequelize,
      tableName: 'escolas',
    })
  }
  static associate(models) {  
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor_escola' });
    this.belongsTo(models.Nivel, { foreignKey: 'nivel_id', as: 'nivel_escola' });
    this.hasMany(models.Cardapio, { foreignKey: 'escola_id', as: 'escola_cardapio' });
    this.hasMany(models.Cart, { foreignKey: 'escola_id', as: 'escola_cart' }); 
    this.hasMany(models.Itens, { foreignKey: 'escola_id', as: 'escola_itens' });
    this.hasMany(models.Pedido, { foreignKey: 'escola_id', as: 'escola_pedidos' });
    this.hasMany(models.Entrega, { foreignKey: 'escola_id', as: 'escola_entrega' });
    this.hasMany(models.Almoxarifado, { foreignKey: 'escola_id', as: 'escola_almo' });
    
  }
  
}

module.exports = Escola;