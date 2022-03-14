const { User } = require('../models');
const validations = require('../schemas');

const create = async (user) => {
  const { error } = validations.validateUser(user);

  if (error) return { code: 400, message: error.details[0].message };

  try {
    const userCreated = await User.create(user);
    return userCreated;
  } catch (err) {
    console.log('exception', err.errors[0].message);
    return {
      type: err.errors[0].type,
      messages: err.errors[0].message,
    };
  }
};

module.exports = {
  create,
};
