const Joi = require('joi');
const { errorsMessages } = require('../utils');

/* https://github.com/sideway/joi/blob/v17.4.0/API.md#list-of-errors */

const validatePost = (post) => Joi.object({
  title: Joi.string().required().messages({
    'string.required': errorsMessages.titleRequired, 
  }),
  content: Joi.string().required().messages({
    'string.required': errorsMessages.contentRequired, 
  }),
  categoryIds: Joi.array().required().messages({
    'any.required': errorsMessages.categoryIdsRequired, 
  }),
}).validate(post);

module.exports = validatePost;
