const { User } = require('../models');
const validations = require('../schemas');

const create = async (user) => {
  const { error } = validations.validateUser(user);

  if (error) return { code: 400, message: error.details[0].message };

  const userCreated = await User.create(user);

  return userCreated;
};

module.exports = {
  create,
};
