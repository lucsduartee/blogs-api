const { user } = require('../services');
const { generateTKN, statusCode } = require('../utils');

const create = async (req, res, next) => {
  const result = await user.create(req.body);

  if (result.code || result.type) return next(result);

  const { displayName, email, password, image } = result;

  const token = generateTKN({
    displayName,
    email,
    password,
    image,
  });

  return res.status(statusCode.CREATED).json({ token });
};

const getAll = async (req, res, next) => {
  const allUsers = await user.getAll();
  if (allUsers.code) return next(allUsers);

  return res.status(statusCode.OK).json(allUsers);
};

module.exports = {
  create,
  getAll,
};
