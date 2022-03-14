const express = require('express');
const user = require('../controllers/user');

const route = express.Router();

route.post('/', user.create);

module.exports = route;
