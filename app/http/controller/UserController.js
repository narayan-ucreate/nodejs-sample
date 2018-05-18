/*var User = {
    index : function(req, res) {
        res.send('user list');
        res.end();
    },
    create : function(req, res) {
        res.send('user create');
        res.end();
    }
};
exports.User;*/

var models = require('../../../models/index');
var UserControllerApi = require('../controller/api/UserController');
exports.index = async function(req, res) {
    var results = await models.User.findAll({
        attributes: ['firstName', 'lastName', 'email'],
      });
    res.render('users/index', {users: results});
}, exports.create = function(req, res) {
    res.render('users/create');
}, exports.store = function(req, res) {
    var data = req.body;
    console.log(data);
    res.send('here');
};
