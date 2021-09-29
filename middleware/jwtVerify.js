const jwt = require('jsonwebtoken');

module.exports = {
    verifyJWT: function (req, res, next) {
        var token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        }

        jwt.verify(token, "luizaopalmeirensenato", function (err, decoded) {
            if (err) {
                return res.status(401).send({ auth: false, message: 'Token inválido ou expirado.' });
            }

            // se tudo estiver ok, salva no request para uso posterior (JÁ JÁ)
            req.userJwt = decoded.user;
            next();
        });
    }
};