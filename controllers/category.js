const { category } = require('../services');
const { statusCode } = require('../utils');

const create = async (req, res, next) => {
  const categoryCreated = await category.create(req.body);

  if (categoryCreated.code) return next(categoryCreated);

  return res.status(statusCode.CREATED).json(categoryCreated);
};

const getAll = async (_req, res, next) => {
  const categories = await category.getAll();

  if (categories.code) return next(categories);

  return res.status(statusCode.OK).json(categories);
};

module.exports = {
  create,
  getAll,
};
