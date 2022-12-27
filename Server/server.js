const express = require('express');
const app = express();
const userRouter = require('./routes/users');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send('This is a test!');
});

app.use('/user', userRouter);

app.use('/form', formRouter);

app.listen(PORT, (req, res) => {
  console.log('Listening on PORT ' + PORT);
});
