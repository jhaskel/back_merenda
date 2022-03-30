const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const User = require('../models/User');
const Role = require('../models/Role');
const UserRoles = require('../models/User_roles');
const Cidade = require('../models/Cidade');

const connection = new Sequelize(dbConfig);


User.init(connection);
Role.init(connection);
UserRoles.init(connection);
Cidade.init(connection);

User.associate(connection.models);
Role.associate(connection.models);
UserRoles.associate(connection.models);

module.exports = connection;