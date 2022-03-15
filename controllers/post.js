const { post } = require('../services');
const { statusCode } = require('../utils');

const create = async (req, res, next) => {
  const { email } = req.tknDecoded;
  const result = await post.create(req.body, email);

  if (result.code) return next(result);

  return res.status(statusCode.CREATED).json(result);
};

module.exports = {
  create,
};
