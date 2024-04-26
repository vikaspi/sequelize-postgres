const express = require('express');
const route = express();

const userController = require('../controllers/user_controller');

route.post('/register',userController.register);
route.get('/get-all-user',userController.getAllUser);

module.exports = route;