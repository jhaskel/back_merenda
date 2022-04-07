const express = require('express');
const app = express();
const http = require("http");
const debug = require('debug')('nodestr:server');
const logger = require('morgan');
const cors = require("cors");
const multer = require("multer");
const admin = require("firebase-admin");
const serviceAccount = require('./serviceAccountKey.json');
const midle = require('./config/midle')
const database = require('./database/index');
const dotenv = require('dotenv');
dotenv.config()

app.use(express.json());



//iniciar firebase
admin.initializeApp({credential:admin.credential.cert(serviceAccount)})
const upload = multer({
    storage:multer.memoryStorage()
})


/*
rutas
*/


const users = require('./rotas/usersRoutes');
const role = require('./rotas/roleRoutes');
const cidade = require('./rotas/cidadeRoutes');
const setor = require('./rotas/setorRoutes');
const config = require('./rotas/configRoutes');
const niveis = require('./rotas/niveisRoutes');
const escolas = require('./rotas/escolasRoutes');
const categorias = require('./rotas/categoriasRoutes');
const cardapios = require('./rotas/cardapiosRoutes');
const pnaes = require('./rotas/pnaeRoutes');
const fornecedores = require('./rotas/fornecedorRoutes');
const contabilidades = require('./rotas/contabilidadeRoutes');
const produtos = require('./rotas/produtosRoutes');
const licitacao = require('./rotas/licitacaoRoutes');
const estoques = require('./rotas/estoqueRoutes');
const status = require('./rotas/statusRoutes');
const cart = require('./rotas/cartRoutes');
const itens = require('./rotas/itensRoutes');
const pedidos = require('./rotas/pedidosRoutes');
const ordens = require('./rotas/ordensRoutes');

const port = normalizePort( process.env.PORT || '3000');
app.set('port',port);
const server= http.createServer(app);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.disable('x-powered-by');




//CHAMANDO AS ROTAS

users(app,upload,midle);
role(app);
cidade(app,midle);
setor(app,midle);
config(app,midle);
niveis(app,midle);
escolas(app,midle);
categorias(app,midle);
cardapios(app,midle);
pnaes(app,midle);
fornecedores(app,midle);
contabilidades(app,midle);
produtos(app,midle);
licitacao(app,midle);
estoques(app,midle);
status(app);
cart(app,midle);
itens(app,midle);
pedidos(app,midle);
ordens(app,midle);


process.env.TZ = "America/Sao_Paulo";
server.listen(port);
server.on('error',onError);
server.on('listening',onListening);

console.log('Api rodando na porta ' + port);
// ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

function normalizePort(val){
    const port = parseInt(val,10);
    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;    
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }
    const bind = typeof port === 'string'?
    'Pipe ' + port :
    'Port ' + port;
    switch(error.code){
        case 'EACESS':
            console.error(bind + ' requires elevated previlegios');
            process.exit(1);
            break;
            case 'EADDRINUSE':
                console.error(bind + ' IS READY USED');
            process.exit(1);
            break;

           
            default:
                throw error;

    }

}
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'?
    'pipe ' + addr :
    'port ' + addr.port;

    debug('Listening on '+bind);


}

module.exports = {
    app: app,
    server:server
}


