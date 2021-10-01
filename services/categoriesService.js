const category = require('../models/category');

const find = async function (params = null) {
    try {
        let result = await category.find({deletedAt: null});

        return result;
    } catch (exception) {
        throw exception;
    }
};

const findById = async function (id) {
    try {
        let result = await category.findById(id);
        return result;
    } catch (exception) {
        throw exception;
    }
};

const create = async function (user, item) {
    try {

        item.createdAt = Date.now();
        item.userCreate = { _id: user.id, name: user.fullname };

        let result = await category.create(item);
        return result;
    } catch (exception) {
        throw exception;
    }
};

const update = async function (user, id, item) {
    try {
        item.updatedAt = Date.now();
        item.userUpdate = { _id: user.id, name: user.fullname };

        let result = await category.findByIdAndUpdate(id, item);
        return result;
    } catch (exception) {
        throw exception;
    }
};

const destroy = async function (user, id) {
    try {
      
        let item = await category.findById(id);

        item.deletedAt = Date.now();
        item.userDelete = { _id: user.id, name: user.fullname };

        const result = await category.findByIdAndUpdate(id, item);
        return result;
    } catch (exception) {
        throw exception;
    }
};

module.exports = {
    find,
    findById,
    create,
    update,
    destroy
}