const { User } = require('../models');

const login = async (loginData) => {
  const { email, password } = loginData;

  const { error } = 

  const result = await User.findOne({
    where: {
      email,
      password,
    },
  });

  console.log(loginData);
};

module.exports = {
  login,
};
