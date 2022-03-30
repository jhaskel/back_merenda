const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      setor: DataTypes.INTEGER,
      isativo: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }
  static associate(models) {    
    this.belongsToMany(models.Role, {foreignKey: 'user_id', through: 'user_roles', as: 'roles' });
  }

  
}

module.exports = User;