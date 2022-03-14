const { user } = require('../services');

const create = async (req, res) => {
  const result = await user.create(req.body);

  if (result.code) {
    return res.status(result.code).json({ message: result.message });
  }

  return res.status(200).json(result);
};

module.exports = {
  create,
};
