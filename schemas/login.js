const Joi = require('joi');
const { errorsMessages } = require('../utils');

/* https://github.com/sideway/joi/blob/v17.4.0/API.md#list-of-errors */

const validateLogin = (loginData) => Joi.object({
  email: Joi.string().empty().required().messages({
    'string.required': errorsMessages.emailRequired,
    'string.empty': errorsMessages.emailEmpty,
  }),
  password: Joi.string().empty().required().messages({
    'string.required': errorsMessages.passwordRequired,
    'string.empty': errorsMessages.passwordEmpty,
  }),
}).validate(loginData);

module.exports = validateLogin;