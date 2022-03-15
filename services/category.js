const { Category } = require('../models');
const { validateCategory } = require('../schemas');
const { statusCode, errorsMessages } = require('../utils');

const create = async (category) => {
  const { error } = validateCategory(category);

  if (error) return { code: statusCode.BAD_REQUEST, message: error.details[0].message };

  try {
    const categoryCreated = await Category.create(category);
    return categoryCreated;
  } catch (err) {
    console.log(err.message);
    return {
      code: statusCode.BAD_REQUEST,
      message: errorsMessages.internalServerError,
    };
  }
};

module.exports = {
  create,
};
