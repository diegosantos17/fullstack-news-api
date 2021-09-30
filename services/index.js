const mongoose = require('mongoose');
const dotenv = require("dotenv");

//#region | Configurando ambiente
let dotEnv = '.env';

if(process.env.NODE_ENV){
    dotEnv += `.${process.env.NODE_ENV}`;
}

dotenv.config({path: `./config/${dotEnv}`});
//#endregion

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.flqrh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

const services = {};

services.usersService = require('./usersServices');
services.profilesService = require('./profilesServices');

module.exports = services;