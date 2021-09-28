const mongoose = require("mongoose");

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
    profile: profile
}, { collection: 'users'});

module.exports = mongoose.model('users', user);