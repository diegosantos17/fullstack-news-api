//Responsável por regras e acesso a base
const user = require('../models/user');

//CRUD
//Create
const create = async function(item){
    try {
        let result = await user.create(item);
        return result;
    } catch (error) {
        throw error;
    }
}

//Read/Read By Id
const find = async function(params){
    try {
        let result = await user.find();
        return result;
    } catch (error) {
        throw error;
    }
}

const findById = async function(id){
    try {
        let result = await user.findById(id);
        return result;
    } catch (error) {
        throw error;
    }
}

//Update
const update = async function(id, item){
    try {
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
    destroy
}
