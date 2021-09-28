const mongoose = require("mongoose");

const profile = new mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String
});

//Model
const user = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    profile: profile
}, { collection: 'users'});

module.exports = mongoose.model('users', user);