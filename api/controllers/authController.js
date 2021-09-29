const services = require('../../services');
const usersServices = services.usersService;
const bcrypt = require('../../crosscuting/bcrypt');
const jwt = require('jsonwebtoken');

const auth = async function(req, res, next){
    let user = await usersServices.authentication(req.body.email);

    if(user){
        let isEqual = await bcrypt.comparePassword(req.body.password, user.password);

        if(isEqual){

            // DTOPattern
            let userDto = {
                id: user._id,
                name: user.name,
                lastname: user.lastname,
                fullname: user.name + ' ' + user.lastname,
                email: user.email,
                profile: user.profile
            }

            const token = jwt.sign({user: userDto}, "luizaopalmeirensenato", {
                expiresIn: 6000 // 10 minutos 
            });

            res.status(200).send({auth: isEqual, user: userDto, token: token});
        }  
    } 

    //res.statusCode = 200;
    res.status(200).send({auth: false, user: null});

}

module.exports = {
    auth
}