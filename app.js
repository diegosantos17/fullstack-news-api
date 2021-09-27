const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

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

server.listen(process.env.PORT, '0.0.0.0', function(err){
    if(err){
        console.error(err);
    } else {
        console.log(`API Listening on port ${process.env.PORT}`);
    }
})

