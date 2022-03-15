const express = require('express');
const { user } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const route = express.Router();

route.post('/', user.create);
route.use(authMiddleware);
route.get('/', user.getAll);
route.get('/:id', user.getById);

module.exports = route;
