const express = require('express');
const route = express();

const userController = require('../controllers/user_controller');

route.post('/register',userController.register);
route.get('/get-all-user',userController.getAllUser);
route.get('/get-user/:id',userController.getUserById);
module.exports = route;