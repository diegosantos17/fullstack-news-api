const mongoose = require("mongoose");

const userAuth = new mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String
});

const profile = new mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String
});

//Model
const user = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O nome é obrigatório']
    },
    lastname: String,
    email: String,
    password: String,
    profile: profile,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    userCreate: {
        type: userAuth
    },
    userUpdate: {
        type: userAuth
    },
    userDelete: {
        type: userAuth
    },
}, { collection: 'users'});

module.exports = mongoose.model('users', user);