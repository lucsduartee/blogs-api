const { BlogPost, Category } = require('../models');
const { validatePost } = require('../schemas');
const { statusCode, errorsMessages } = require('../utils');

const verifyCategoriesIds = (categoriesId) => {
  const idsPromise = categoriesId.map(async (id) => Category.findByPk(id));
  const ids = Promise.all(idsPromise);
  const isInexistentCategory = ids.some((id) => id === null);

  if (isInexistentCategory) {
    return {
      code: statusCode.BAD_REQUEST,
      message: errorsMessages.categoryIdsNotFound,
    };
  }
};

const create = async (post) => {
  const { error } = validatePost(post);
  
  if (error) return { code: statusCode.BAD_REQUEST, message: error.details[0].message };
  
  verifyCategoriesIds(post.categoriesId);

  try {
    const postCreated = await BlogPost.create(post);
    console.log(postCreated);
    return postCreated;
  } catch (err) {
    console.log(err.message);
    return {
      code: statusCode.INTERNAL_SERVER_ERROR,
      message: errorsMessages.internalServerError,      
    };
  }
};

module.exports = {
  create,
};
