const { User } = require('../models');
const validations = require('../schemas');
const { statusCode, errorsMessages } = require('../utils');

const create = async (user) => {
  const { error } = validations.validateUser(user);

  if (error) return { code: statusCode.BAD_REQUEST, message: error.details[0].message };

  try {
    const userCreated = await User.create(user);
    return userCreated;
  } catch (err) {
    console.log(err.errors[0].message);
    return {
      type: err.errors[0].type,
      messages: err.errors[0].message,
    };
  }
};

const getAll = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (error) {
    console.log(error.message);
    return {
      code: statusCode.BAD_REQUEST,
      message: errorsMessages.internalServerError,
    };
  }
};

module.exports = {
  create,
  getAll,
};
