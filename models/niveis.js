const { Model, DataTypes } = require('sequelize');

class Nivel extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,     
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName:"niveis"
    })
  }
  static associate(models) {    
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor_nivel' });
    this.hasMany(models.Escola, { foreignKey: 'nivel_id', as: 'nivel_escola' });  
    this.hasMany(models.Pnae, { foreignKey: 'nivel_id', as: 'nivel_pnae' }); 
    this.hasMany(models.Contabilidade, { foreignKey: 'nivel_id', as: 'nivel_conta' }); 
    this.hasMany(models.Itens, { foreignKey: 'nivel_id', as: 'nivel_itens' }); 
    this.hasMany(models.Ordem, { foreignKey: 'nivel_id', as: 'nivel_ordem' });   
  }

  
}

module.exports = Nivel;