const Joi = require('joi');
const { errorsMessages } = require('../utils');

/* https://github.com/sideway/joi/blob/v17.4.0/API.md#list-of-errors */
/* https://stackoverflow.com/questions/63584205/how-to-set-custom-message-for-regex-in-joi */
/* https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/ */

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
