const newsService = require('../../services').newsService;
const utilResponse = require('../../crosscuting/response');

const find = async function (req, res, next) {
  try {
    const news = await newsService.find(req);
    res.status(200).send(utilResponse.format(news, "get"));
  } catch (error) {
    res.statusCode = error.errors ? 400 : 500;
    res.send(utilResponse.format(error));
  }
};

const findById = async function (req, res, next) {
  try {
    const news = await newsService.findById(req.params.index);
    res.status(200).send(utilResponse.format(news, "get"));
  } catch (error) {
    res.statusCode = error.errors ? 400 : 500;
    res.send(utilResponse.format(error));
  }
};

const create = async function (req, res, next) {
  try {
    const result = await newsService.create(req.userJwt, req.body);
    res.status(201).send(utilResponse.format(result, "post"));
  } catch (error) {

    res.statusCode = error.errors ? 400 : 500;
    res.send(utilResponse.format(error));
  }
};

const update = async function (req, res, next) {
  try {
    const result = await newsService.update(req.userJwt, req.params.index, req.body);
    res.status(204).send(utilResponse.format(result, "put"));
  } catch (error) {
    res.statusCode = error.errors ? 400 : 500;
    res.send(utilResponse.format(error));
  }
};

const destroy = async function (req, res, next) {
  try {
    const result = await newsService.destroy(req.userJwt, req.params.index);
    res.status(202).send(utilResponse.format(result, "delete"));
  } catch (error) {
    res.statusCode = error.errors ? 400 : 500;
    res.send(utilResponse.format(error));
  }
};

module.exports = {
  find,
  findById,
  create,
  update,
  destroy
}