const bcrypt = require("bcrypt");
const saltRounds = 10;

// Comparar a requisição com o que está salvo
const comparePassword = async function(requestPassword, password){
    return bcrypt.compare(requestPassword, password);
}

// Criptografar a senha
const encryptPassword = async function(password){
    return bcrypt.hash(password, saltRounds);
}

module.exports = {
    comparePassword,
    encryptPassword
}