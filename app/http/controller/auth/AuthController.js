var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../../../config/config');
var models = require('../../../../models/index');
exports.auth = function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.secret, function (err, decoded) {
          if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        models.User.findOne({
            where: {
                id: decoded.id,
            }
        }).then(function (users) {
            next(); // add this line
        }).catch(function (err) {
            res.send('invalid token').end();
        })
    });
}