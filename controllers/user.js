const { user } = require('../services');
const { generateTKN } = require('../utils');

const create = async (req, res) => {
  const result = await user.create(req.body);

  if (result.code) {
    return res.status(result.code).json({ message: result.message });
  }

  if (result.type) {
    return res.status(409).json({ message: 'User already registered' });
  }

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
