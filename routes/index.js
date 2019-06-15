const express = require('express');
const app = express();

app.use(require('./home'));
app.use(require('./social'));

module.exports = app;