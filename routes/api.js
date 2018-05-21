var express = require('express')
var UserController = require('../app/http/controller/api/UserController');
var jwt = require('jsonwebtoken');
let config = require('../config/config')
let models = require('../models/index')
let AuthController = require('../app/http/controller/auth/AuthController');
var router = express()
//this is public url everyone can access without login
router.route('/users')
    .post(UserController.store);
//middleware for authentication
router.use(AuthController.auth)
//all are protected routes
router.route('/users')
    .get(UserController.index);
router.route('/users/:id')
    .get(UserController.show)
    .put(UserController.update)
router.get('/register', UserController.register)
module.exports = router;