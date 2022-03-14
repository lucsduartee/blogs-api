const express = require('express');
const bodyParser = require('body-parser');
const {
  userRouter,
  loginRouter,
} = require('./routes');
const { errorMiddleware } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (request, response) => {
  response.send();
});
