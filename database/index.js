const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const User = require('../models/User');
const Role = require('../models/Role');
const UserRoles = require('../models/User_roles');
const Cidade = require('../models/Cidade');
const Setor = require('../models/Setor');
const Config = require('../models/config');
const Nivel = require('../models/niveis');
const Escola = require('../models/escolas');
const Categoria = require('../models/categorias');
const Cardapio = require('../models/cardapio');
const Pnae = require('../models/pnae');
const Fornecedor = require('../models/fornecedor');
const Contabilidade = require('../models/contabilidade');
const Produto = require('../models/produtos');
const Licitacao = require('../models/licitacao');
const Estoque = require('../models/estoque');
const Status = require('../models/status');
const EstoqueSetor = require('../models/estoque_setor');
const Cart = require('../models/cart');
const Itens = require('../models/itens');
const Pedido = require('../models/pedidos');
const Ordem = require('../models/ordens');
const OrdemPedidos = require('../models/ordem_pedidos');
const Entrega = require('../models/entrega');
const Almoxarifado = require('../models/almoxarifado');


const connection = new Sequelize(dbConfig);


User.init(connection);
Role.init(connection);
UserRoles.init(connection);
Cidade.init(connection);
Setor.init(connection);
Config.init(connection);
Nivel.init(connection);
Escola.init(connection);
Categoria.init(connection);
Cardapio.init(connection);
Pnae.init(connection);
Fornecedor.init(connection);
Contabilidade.init(connection);
Produto.init(connection);
Licitacao.init(connection);
Estoque.init(connection);
Status.init(connection);
EstoqueSetor.init(connection);
Cart.init(connection);
Itens.init(connection);
Pedido.init(connection);
Ordem.init(connection);
Entrega.init(connection);
Almoxarifado.init(connection);



User.associate(connection.models);
Role.associate(connection.models);
UserRoles.associate(connection.models);
Setor.associate(connection.models);
Config.associate(connection.models);
Nivel.associate(connection.models);
Escola.associate(connection.models);
Cardapio.associate(connection.models);
Pnae.associate(connection.models);
Categoria.associate(connection.models);
Fornecedor.associate(connection.models);
Contabilidade.associate(connection.models);
Produto.associate(connection.models);
Licitacao.associate(connection.models);
EstoqueSetor.associate(connection.models);
Cart.associate(connection.models);
Itens.associate(connection.models);
Status.associate(connection.models);
Pedido.associate(connection.models);
Ordem.associate(connection.models);
Entrega.associate(connection.models);
Almoxarifado.associate(connection.models);

module.exports = connection;