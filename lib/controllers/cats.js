const { Router } = require('express');
const { cats } = require('../../data/cats');
const app = require('../app');

app.get;

module.exports = Router().get('/', (req, res) => {
  res.json(cats);
});
