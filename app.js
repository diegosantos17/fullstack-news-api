const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./api/routes");

//#region | Configurando ambiente
let dotEnv = '.env';

if(process.env.NODE_ENV){
    dotEnv += `.${process.env.NODE_ENV}`;
}

dotenv.config({path: `./config/${dotEnv}`});
//#endregion

const server = express();
server.use(express.json());
server.use(cors());
server.use(routes);

// Comentar (middleware)
server.use((req, res, next) => { 
    console.time('Request'); 
    console.log(`Método: ${req.method}; URL: ${req.url}; `); 

    next(); 

    console.log('Finalizou'); // será chamado após a requisição ser concluída
    console.timeEnd('Request'); // marca o fim da requisição
});


server.listen(process.env.PORT, '0.0.0.0', function(err){
    if(err){
        console.error(err);
    } else {
        console.log(`API Listening on port ${process.env.PORT}`);
    }
})

