const mongoose = require('mongoose');

const userAuth = new mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String
});

const category = new mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String
});

const news = mongoose.Schema(
    {
        title: String,
        subtitle: String,
        content: String,
        createdAt: Date,
        updatedAt: Date,
        publishedAt: Date,
        deleteAt: Date,
        state: String,
        image: String,
        userCreate: {
            type: userAuth
        },
        userUpdate: {
            type: userAuth
        },
        userApproval: {
            type: userAuth
        },
        userDelete: {
            type: userAuth
        },
        categories: {
            type: [category]
        }
    }, { collection: "news" });

module.exports = mongoose.model('news', news);
