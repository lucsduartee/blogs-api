require('dotenv').config();
const jwt = require('jsonwebtoken');
const { statusCode, errorsMessages } = require('../utils');

const tknExists = (token, next) => {
  if (!token) {
    return next({
      code: statusCode.UNAUTHORIZED,
      message: errorsMessages.tknNotFound,
    });
  }
};

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;

  tknExists(token, next);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.tknDecoded = decoded.padStart;
    next();
  } catch (error) {
    console.log(error.message);
    if (error.name.includes('Token')) {
      return next({
        code: statusCode.UNAUTHORIZED,
        message: errorsMessages.expiredOrInvalidTkn,
      });
    }
    next(error);
  }
};
