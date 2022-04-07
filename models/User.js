const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,     
      password: DataTypes.STRING,
      session_token: DataTypes.STRING,
      notification_token:DataTypes.STRING,
      recovery:DataTypes.STRING,
      modulo: DataTypes.INTEGER,
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }
  static associate(models) {    
    this.belongsToMany(models.Role, {foreignKey: 'user_id', through: 'user_roles', as: 'roles' });
    this.hasMany(models.Pedido, { foreignKey: 'user_id', as: 'users_pedidos' }); 
    this.belongsTo(models.Cidade, { foreignKey: 'cidade_id', as: 'cidade_users'});  
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor_users'});
  }

  
}

module.exports = User;