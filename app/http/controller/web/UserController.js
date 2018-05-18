var models = require('../../../../models/index');
var userComponent = require('../../components/users');

exports.index = async function(req, res) {
    res.render('users/index', {users: await userComponent.index(res)});
}, exports.create = function(req, res) {
    res.render('users/create');
}, exports.store = async function(req, res) {
    var response = await userComponent.store(req, res);
    res.redirect('/users');
};
