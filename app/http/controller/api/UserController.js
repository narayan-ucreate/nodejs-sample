var models = require('../../../../models/index');
var helpers = require('../../../../helper/helper');
var userComponent = require('../../components/users');
exports.index = async function (req, res) {
    res.send( await userComponent.index(res)).end();
}, exports.store = async function (req, res) {
    res.send( await userComponent.store(req, res)).end()
}, exports.show = async function (req, res) {
    res.send( await userComponent.show(req, res)).end();
}, exports.update = async function (req, res) {
    res.send( await userComponent.update(req, res)).end();
}, exports.register = async function(req, res) {
    
}