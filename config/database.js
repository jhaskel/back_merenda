
const dotenv = require('dotenv');
dotenv.config();

const a = process.env.HOST;
console.log(a);

module.exports = {

    dialect: 'mysql',
    /*host :process.env.host,
    username :process.env.user,
    password :process.env.password,
    database :process.env.banco,
    host :process.env.host,*/
    host :'gepron.com.br',
    username :'gepronco_haskel',
    password : 'Haskel00',
    database : 'gepronco_merenda',
    define: {
      timestamps: true,
      underscored: true,
    },
    
    dialectOptions: {     
      options: {
        useUTC: false, // for reading from database
      },
    },
    timezone: "America/Sao_Paulo",
  };