const express = require('express');
const { category } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const route = express.Router();

route.use(authMiddleware);
route.post('/', category.create);
route.get('/', category.getAll);

module.exports = route;
