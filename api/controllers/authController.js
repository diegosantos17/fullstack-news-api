const services = require('../../services');
const usersServices = services.usersService;
const bcrypt = require('../../crosscuting/bcrypt');
const jwt = require('jsonwebtoken');
const utilResponse = require('../../crosscuting/response');

const auth = async function (req, res, next) {
  let user = await usersServices.authentication(req.body.email);

  if (user) {
    let isEqual = await bcrypt.comparePassword(req.body.password, user.password);

    if (isEqual) {

      // DTOPattern
      let userDto = {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        fullname: user.name + ' ' + user.lastname,
        email: user.email,
        profile: user.profile
      }

      const token = jwt.sign({ user: userDto }, "luizaopalmeirensenato", {
        expiresIn: 6000 // 10 minutos 
      });

      return res.status(200).send({ auth: isEqual, user: userDto, token: token });
    }
  }

  //res.statusCode = 200;
  res.status(200).send({ auth: false, user: null });

}

const renew = async function (req, res, next) {
  try {
    const token = jwt.sign({ id: req.userJwt.id, profile: req.userJwt.profile }, "luizaopalmeirensenato", {
      expiresIn: 600 // 10 minutos
    });

    return res.status(200).send(({ auth: true, token: token }));
  } catch (error) {
    res.statusCode = error.errors ? 400 : 500;
    res.send(utilResponse.format(error));
  }
}

module.exports = {
  auth,
  renew
}