const { errorsMessages, statusCode } = require('../utils');

module.exports = async (err, _req, res, _next) => {
  if (err.type) {
    return res.status(statusCode.CONFLICT)
      .json({ message: errorsMessages.existentUser });
  }
  
  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }

  return res.status(statusCode.INTERNAL_SERVER_ERROR)
    .json({ message: errorsMessages.internalServerError });
};
