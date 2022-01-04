const express = require('express');
const port = 3000;
const app = express();
const ola = require('./util');

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});

app.get('/', (req, res) => {
  res.send(ola.dizOla());
});