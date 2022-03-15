const Joi = require('joi');
const { errorsMessages } = require('../utils');

const validatePost = (post) => Joi.object({
  title: Joi.string().required().messages({
    'string.required': errorsMessages.titleRequired, 
  }),
  content: Joi.string().required().messages({
    'string.required': errorsMessages.contentRequired, 
  }),
  categoryIds: Joi.string().required().messages({
    'string.required': errorsMessages.categoryIdsRequired, 
  }),
}).validate(post);

module.exports = validatePost;
