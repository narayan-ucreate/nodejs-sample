var express = require('express')
var UserController = require('../app/http/controller/api/UserController');
var router = express()
router.route('/users')
    .get(UserController.index)
    .post(UserController.store);
router.route('/users/:id')
    .get(UserController.show)
    .put(UserController.update)
module.exports = router;