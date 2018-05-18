var models = require('../../../models/index');
var helpers = require('../../../helper/helper')
exports.index = function (res) {
    return models.User.findAll({
        attributes: ['firstName', 'lastName', 'email'],
    }).then(function (users) {
        return helpers.apiResponse(res, 200, 'success', users);
    });
}, exports.store = function (req, res) {
    return models.User.build(req.body)
        .save()
        .then(function () {
            return helpers.apiResponse(res, 200, 'success', '');
        })
        .catch(function (err) {
            return helpers.apiResponse(res, 422, 'false', '', helpers.preparedValidationMessage(err.errors));
        })
}, exports.show = function (req, res) {
    return models.User.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['firstName', 'lastName', 'email'],
    }).then(function (users) {
        return helpers.apiResponse(res, 200, 'success', users);
    });
}, exports.update = function (req, res) {
    return models.User.update(req.body, {
        where: {
            id: {
                $eq: req.params.id
            }
        }
    }).then(function () {
        return helpers.apiResponse(res, 200, 'User successfully updated.', '');
    })
}
