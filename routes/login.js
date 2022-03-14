const express = require('express');
const { login } = require('../controllers');

const route = express.Router();

route.post('/', login.signUp);

module.exports = route;
