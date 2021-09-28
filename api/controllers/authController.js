const services = require('../../services');
const usersServices = services.usersService;
const bcrypt = require('../../crosscuting/bcrypt');

const auth = async function(req, res, next){
    let user = await usersServices.authentication(req.body.email);

    if(user){
        let isEqual = await bcrypt.comparePassword(req.body.password, user.password);

        if(isEqual){
            res.status(200).send({auth: isEqual, user: user});
        }  
    } 

    //res.statusCode = 200;
    res.status(200).send({auth: false, user: null});

}

module.exports = {
    auth
}