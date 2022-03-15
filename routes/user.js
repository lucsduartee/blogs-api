const express = require('express');
const { user } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const route = express.Router();

route.post('/', user.create);
route.get('/', authMiddleware, user.getAll);

module.exports = route;
