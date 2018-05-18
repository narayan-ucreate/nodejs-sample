var express = require('express')
var router = express()
var UserController = require('../app/http/controller/UserController');
router.get('/users', UserController.index)
router.post('/users', UserController.store)
router.get('/users/create', UserController.create)
module.exports = router;

