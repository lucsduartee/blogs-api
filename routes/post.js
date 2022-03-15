const express = require('express');
const { post } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const route = express.Router();

route.use(authMiddleware);
route.post('/', post.create);

module.exports = route;