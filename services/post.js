const { BlogPost, Category, User } = require('../models');
const { validatePost } = require('../schemas');
const { statusCode, errorsMessages } = require('../utils');

/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise */
const verifyCategoriesIds = async (categoriesId) => {
  const idsPromise = categoriesId.map(async (id) => Category.findByPk(id));
  const ids = await Promise.all(idsPromise);
  const isInexistentCategory = ids.some((id) => id === null);

  if (isInexistentCategory) {
    return {
      code: statusCode.BAD_REQUEST,
      message: errorsMessages.categoryIdsNotFound,
    };
  }
};

const findByEmail = async (email) => {
  try {
    const id = await User.findOne({
      where: {
        email,
      },
    });
    return id.dataValues.id;
  } catch (err) {
    return {
      code: statusCode.NOT_FOUND,
      message: errorsMessages.internalServerError,
    };
  }
};

const create = async (post, email) => {
  const { error } = validatePost(post);
  const { title, content } = post;
  if (error) return { code: statusCode.BAD_REQUEST, message: error.details[0].message };
  
  const validCategoyIds = await verifyCategoriesIds(post.categoryIds);
  
  if (validCategoyIds) {
    return verifyCategoriesIds(post.categoryIds);
  }

  try {
    const userId = await findByEmail(email);
    const postCreated = await BlogPost.create({ userId, title, content });
    return postCreated;
  } catch (err) {
    console.log(err.message);
    return {
      code: statusCode.INTERNAL_SERVER_ERROR,
      message: errorsMessages.internalServerError,      
    };
  }
};

const getAll = async () => {
  try {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return posts;
  } catch (err) {
    return {
      code: statusCode.INTERNAL_SERVER_ERROR,
      message: errorsMessages.internalServerError, 
    };
  }
};

const getById = async (id) => {
  try {
    const post = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    if (!post) return { code: statusCode.NOT_FOUND, message: errorsMessages.postNotFound };
    return post;
  } catch (err) {
    return {
      code: statusCode.INTERNAL_SERVER_ERROR,
      message: errorsMessages.internalServerError, 
    };
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
