const Joi = require('joi');
const { errorsMessages } = require('../utils');

const validateCategory = (category) => Joi.object({
  name: Joi.string().required().messages({
    'string.required': errorsMessages.nameRequired,
  }),
}).validate(category);

module.exports = validateCategory;