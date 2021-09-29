//Responsável por regras e acesso a base
const user = require('../models/user');
const bcrypt = require('../crosscuting/bcrypt');
const moment = require('moment');

//CRUD
//Create
const create = async function(userAuth, item){
    try {

        item.createdAt = moment().add(-3, 'hours').format();
        item.userCreate = {
            _id: userAuth.id,
            name: userAuth.fullname
        }

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
        // Deleção Lógica
        let result = await user.find({deletedAt: null},{password: 0});
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
const update = async function(userAuth, id, item){
    try {
        
        item.updatedAt = Date.now();
        item.userUpdate = {
            _id: userAuth.id,
            name: userAuth.fullname
        }

        item.password = await bcrypt.encryptPassword(item.password); 
        let result = await user.findByIdAndUpdate(id, item);
        return result;
    } catch (error) {
        throw error;
    }
}

//Delete (*)
const destroy = async function(userAuth, id){
    try {
        let item = await user.findById(id); 
        
        item.deletedAt = Date.now();
        item.userDelete = {
            _id: userAuth.id,
            name: userAuth.fullname
        }

        // Deleção Lógica
        let result = await user.findByIdAndUpdate(id, item);
        return result;
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
