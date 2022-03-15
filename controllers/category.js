const { category } = require('../services');
const { statusCode } = require('../utils');

const create = async (req, res, next) => {
  const categoryCreated = await category.create(req.body);

  if (categoryCreated.code) return next(categoryCreated);

  return res.status(statusCode.CREATED).json(categoryCreated);
};

module.exports = {
  create,
};
