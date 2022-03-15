const { post } = require('../services');
const { statusCode } = require('../utils');

const create = async (req, res, next) => {
  const { email } = req.tknDecoded;
  const result = await post.create(req.body, email);

  if (result.code) return next(result);

  return res.status(statusCode.CREATED).json(result);
};

const getAll = async (_req, res, next) => {
  const result = await post.getAll();

  if (result.code) return next(result);

  return res.status(statusCode.OK).json(result);
};

const getById = async (req, res, next) => {
  const result = await post.getById(req.params.id);

  if (result.code) return next(result);

  return res.status(statusCode.OK).json(result);
};

module.exports = {
  create,
  getAll,
  getById,
};
