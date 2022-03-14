const { User } = require('../models');
const { validateLogin } = require('../schemas');
const { statusCode } = require('../utils');

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

  console.log(result);
};

module.exports = {
  login,
};
