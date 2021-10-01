const news = require('../models/news');

const find = async function (params = null) {
    try {
        let result = await news.find({deletedAt: null});

        return result;
    } catch (exception) {
        throw exception;
    }
};

const findById = async function (id) {
    try {
        let result = await news.findById(id);
        return result;
    } catch (exception) {
        throw exception;
    }
};

const create = async function (user, item) {
    try {
        item.createdAt = Date.now();
        item.userCreate = { _id: user.id, name: user.fullname };

        let result = await news.create(item);
        return result;
    } catch (exception) {
        throw exception;
    }
};

const update = async function (user, id, item) {
    try {
        item.updatedAt = Date.now();
        item.userUpdate = { _id: user.id, name: user.fullname };

        let result = await news.findByIdAndUpdate(id, item);
        return result;
    } catch (exception) {
        throw exception;
    }
};

const destroy = async function (user, id) {
    try {

        let newsDestroy = await news.findById(id);

        newsDestroy.deletedAt = Date.now();
        newsDestroy.userDelete = { _id: user.id, name: user.fullname };

        let result = await news.findByIdAndUpdate(id, newsDestroy);
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