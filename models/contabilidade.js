const { Model, DataTypes } = require('sequelize');

class Contabilidade extends Model {
  static init(sequelize) {
    super.init({
      orgao: DataTypes.INTEGER,
      nome_orgao: DataTypes.STRING,
      unidade: DataTypes.INTEGER,
      nome_unidade: DataTypes.STRING,     
      projeto: DataTypes.INTEGER,          
      nome_projeto: DataTypes.STRING,
      nome_receita: DataTypes.STRING,
      cod: DataTypes.INTEGER,   
      code: DataTypes.INTEGER, 
      elemento: DataTypes.STRING,  
      orcamento: DataTypes.DOUBLE,
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'contabilidade',
    })
  }
  static associate(models) {       
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor_conta' }); 
    this.belongsTo(models.Nivel, { foreignKey: 'nivel_id', as: 'nivel_conta' }); 
    this.hasMany(models.Ordem, { foreignKey: 'despesa_id', as: 'despesa_ordem' });   
  }

  
}

module.exports = Contabilidade;