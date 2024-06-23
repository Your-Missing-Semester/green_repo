const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { loginRouter } = require('./routes/login');
const { signUpRouter } = require('./routes/signUp');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/healthcheck', (req, res) => {
  res.json({ message: 'hello' });
});

app.use('/api', loginRouter);
app.use('/api', signUpRouter);

module.exports = { app };
