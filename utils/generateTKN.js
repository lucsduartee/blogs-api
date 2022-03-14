require('dotenv').config();
const jwt = require('jsonwebtoken');

const options = {
  expiresIn: '2h',
};

const generate = (payload) => jwt
  .sign(payload, process.env.JWT_SECRET, options);

module.exports = generate;