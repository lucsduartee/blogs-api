const { User } = require('../models');
const { validateLogin } = require('../schemas');
const { statusCode, errorsMessages } = require('../utils');

const login = async (loginData) => {
  const { email, password } = loginData;
  const { error } = validateLogin(loginData);

  if (error) {
    return { code: statusCode.BAD_REQUEST, message: error.details[0].message };
  }

  const result = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if (!result) {
    return {
      code: statusCode.BAD_REQUEST,
      message: errorsMessages.invalidFields,
    };
  }

  return loginData;
};

module.exports = {
  login,
};
