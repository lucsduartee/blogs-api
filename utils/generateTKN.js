require('dotenv').config();
const jwt = require('jsonwebtoken');

const options = {
  expiresIn: '1d',
};

const generate = (payload) => jwt
  .sign(payload, process.env.JWT_SECRET, options);

module.exports = generate;