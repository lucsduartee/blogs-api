const Joi = require('joi');
const { errorsMessages } = require('../utils');

/* https://github.com/sideway/joi/blob/v17.4.0/API.md#list-of-errors */

const validateCategory = (category) => Joi.object({
  name: Joi.string().required().messages({
    'string.required': errorsMessages.nameRequired,
  }),
}).validate(category);

module.exports = validateCategory;