// iska ab 1 kam hai: 1) server ko create karna,
const express = require('express');

const app = express();

app.use(express.json())

module.exports = app