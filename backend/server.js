const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { signInRouter } = require('./routes/signIn');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/healthcheck', (req, res) => {
  res.json({ message: 'hello' });
});

app.use('/api', signInRouter);

module.exports = { app };
