var express = require('express')
var router = express()
var UserController = require('../app/http/controller/web/UserController');
router.post('/users', UserController.store)
router.get('/users', UserController.index)
router.get('/users/create', UserController.create)
module.exports = router;

