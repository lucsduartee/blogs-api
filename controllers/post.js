const { post } = require('../services');
const { statusCode } = require('../utils');

const create = async (req, res, next) => {
  const result = await post.create(req.body);

  if (result.code) return next(result);
  
  return res.status(statusCode.CREATED).json(result);
};

module.exports = {
  create,
};
