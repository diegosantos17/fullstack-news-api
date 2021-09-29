const services = require('../../services');
const usersServices = services.usersService;

const find = async function(req, res, next){
    try {
        let result = await usersServices.find(req.query);
        res.statusCode = 200;
        res.send(result); 
    } catch (error) {
        res.statusCode = 400; //ou 500
        res.send({success: false});
    }
}

const findById = async function(req, res, next){
    try {
        let result = await usersServices.findById(req.params.index);
        res.statusCode = 200;
        res.send(result); 
    } catch (error) {
        res.statusCode = 400; //ou 500
        res.send({success: false});
    }
}

const create = async function(req, res, next){
    try {
        let result = await usersServices.create(req.userJwt, req.body);
        res.statusCode = 201;
        res.send(result); 
    } catch (error) {
        res.statusCode = 400; //ou 500
        res.send({success: false, error: error});
    }
}

const update = async function(req, res, next){
    try {
        let result = await usersServices.update(req.userJwt, req.params.index, req.body);
        res.statusCode = 202;
        res.send(result); 
    } catch (error) {
        res.statusCode = 400; //ou 500
        res.send({success: false});
    }
}

const destroy = async function(req, res, next){
    try {
        let result = await usersServices.destroy(req.userJwt, req.params.index, req.body);
        res.statusCode = 202;
        res.send(result); 
    } catch (error) {
        res.statusCode = 400; //ou 500
        res.send({success: false});
    }
}

module.exports = {
    find,
    findById,
    create,
    update,
    destroy
}