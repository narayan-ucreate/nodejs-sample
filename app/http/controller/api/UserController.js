var models = require('../../../../models/index');
var helpers = require('../../../../helper/helper')
exports.index = async function (req, res) {
    await models.User.findAll({
        attributes: ['firstName', 'lastName', 'email'],
    }).then(function (users) {
        return helpers.apiResponse(res, 200, 'success', users);
    });
    res.end();
}, exports.store = async function (req, res) {
    models.User.build(req.body)
      .save()
      .then(function() {
        return helpers.apiResponse(res, 200, 'success', '');
      })
      .catch(function(err) {
        helpers.apiResponse(res, 422, 'false', '', helpers.preparedValidationMessage(err.errors));
      })
}, exports.show = async function (req, res) {
    var userId = req.params.id;
    await models.User.findOne({
        where: {
            id: userId,
        },
        attributes: ['firstName', 'lastName', 'email'],
    }).then(function (users) {
        return helpers.apiResponse(res, 200, 'success', users);
    });
    res.end();
}, exports.update = async function (req, res) {
    var userId = req.params.id;
    await models.User.update(req.body, {
        where: {
          id: {
            $eq: userId
          }
        }
      })
    return helpers.apiResponse(res, 200, 'User successfully updated.', '');
    res.end();
};
