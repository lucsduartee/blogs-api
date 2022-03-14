const { user } = require('../services');
const { generateTKN } = require('../utils');

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

  return res.status(201).json({ token });
};

module.exports = {
  create,
};
