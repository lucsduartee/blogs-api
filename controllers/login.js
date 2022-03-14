const { login } = require('../services');
const { generateTKN } = require('../utils');

const signUp = async (req, res, next) => {
  const result = await login.login(req.body);

  if (result.code) return next(result);

  const { email, password } = result;

  const token = generateTKN({
    email,
    password,
  });

  return res.status(200).json({ token });
};

module.exports = {
  signUp,
};
