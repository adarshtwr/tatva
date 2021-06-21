require("./models");

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())

const router = express.Router();
const routes = require('./routes/index');

app.use('/api', routes(router));

module.exports = app;