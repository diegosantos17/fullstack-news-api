//Responsável por regras e acesso a base
const profile = require('../models/profile');
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

        let result = await profile.create(item);
        return result;
    } catch (error) {
        throw error;
    }
}

//Read/Read By Id
const find = async function(params){
    try {
        // Deleção Lógica
        let result = await profile.find({deletedAt: null});
        return result;
    } catch (error) {
        throw error;
    }
}

const findById = async function(id){
    try {
        let result = await profile.findById(id);
        return result;
    } catch (error) {
        throw error;
    }
}

//Update
const update = async function(userAuth, id, item){
    try {
        
        item.updatedAt = moment().add(-3, 'hours').format();
        item.userUpdate = {
            _id: userAuth.id,
            name: userAuth.fullname
        }

        let result = await profile.findByIdAndUpdate(id, item);
        return result;
    } catch (error) {
        throw error;
    }
}

//Delete (*)
const destroy = async function(userAuth, id){
    try {
        let item = await profile.findById(id); 
        
        item.deletedAt = moment().add(-3, 'hours').format();
        item.userDelete = {
            _id: userAuth.id,
            name: userAuth.fullname
        }

        // Deleção Lógica
        let result = await profile.findByIdAndUpdate(id, item);
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
    destroy
}
