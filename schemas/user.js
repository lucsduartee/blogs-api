const Joi = require('joi');
const { errorsMessages } = require('../utils');

const validateUser = (user) => Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': errorsMessages.displayNameLength,
  }),
  email: Joi.string().pattern(/\S+@\S+\.\S+/).required().messages({
    'string.pattern.base': errorsMessages.emailValid,
    'string.required': errorsMessages.emailRequired,
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': errorsMessages.passwordLength,
    'string.required': errorsMessages.passwordRequired,
  }),
  image: Joi.allow(),
}).validate(user);

module.exports = validateUser;
