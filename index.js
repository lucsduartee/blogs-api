const express = require('express');
const bodyParser = require('body-parser');
const { Category, BlogPost } = require('./models');

const app = express();

app.use(bodyParser.json());

app.get('/posts/:id', async (req, res) => {
  try {
    const post = await BlogPost.findOne({
      where: { id: req.params.id },
      include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return res.status(200).json(post);
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (request, response) => {
  response.send();
});
