//Responsável por regras e acesso a base
const user = require('../models/user');
const bcrypt = require('../crosscuting/bcrypt');

//CRUD
//Create
const create = async function(item){
    try {

        item.password = await bcrypt.encryptPassword(item.password); 

        let result = await user.create(item);
        return result;
    } catch (error) {
        throw error;
    }
}

//Read/Read By Id
const find = async function(params){
    try {
        let result = await user.find({},{password: 0});
        return result;
    } catch (error) {
        throw error;
    }
}

const findById = async function(id){
    try {
        let result = await user.findById(id, {password: 0});
        return result;
    } catch (error) {
        throw error;
    }
}

const authentication = async function(email){
    try {
        let result = await user.findOne({email: email},{});
        return result;
    } catch (error) {
        throw error;
    }
}

//Update
const update = async function(id, item){
    try {
        item.password = await bcrypt.encryptPassword(item.password); 
        let result = await user.findByIdAndUpdate(id, item);
        return result;
    } catch (error) {
        throw error;
    }
}

//Delete (*)
const destroy = async function(id){
    try {
        // let result = await user.create(item);
        // return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    find,
    findById,
    update,
    destroy,
    authentication
}
