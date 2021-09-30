const services = require('../../services');
const profilesServices = services.profilesService;
const utilResponse = require('../../crosscuting/response');

const find = async function(req, res, next){
    try {
        let result = await profilesServices.find(req.query);
        res.status(200).send(utilResponse.format(result, "get"));
    } catch (error) {
        res.statusCode = error.errors ? 400 : 500;
        res.send(utilResponse.format(error));
    }
}

const findById = async function(req, res, next){
    try {
        let result = await profilesServices.findById(req.params.index);
        res.status(200).send(utilResponse.format(result, "get"));
    } catch (error) {
        res.statusCode = error.errors ? 400 : 500;
        res.send(utilResponse.format(error));
    }
}

const create = async function(req, res, next){
    try {
        let result = await profilesServices.create(req.userJwt, req.body);
        res.status(201).send(utilResponse.format(result, "post"));
    } catch (error) {
        res.statusCode = error.errors ? 400 : 500;
        res.send(utilResponse.format(error));
    }
}

const update = async function(req, res, next){
    try {
        let result = await profilesServices.update(req.userJwt, req.params.index, req.body);
        res.status(202).send(utilResponse.format(result, "put"));
    } catch (error) {
        res.statusCode = error.errors ? 400 : 500;
        res.send(utilResponse.format(error));
    }
}

const destroy = async function(req, res, next){
    try {
        let result = await profilesServices.destroy(req.userJwt, req.params.index, req.body);
        res.status(202).send(utilResponse.format(result, "delete"));
    } catch (error) {
        res.statusCode = error.errors ? 400 : 500;
        res.send(utilResponse.format(error));
    }
}

module.exports = {
    find,
    findById,
    create,
    update,
    destroy
}