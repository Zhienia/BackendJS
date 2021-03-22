const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const userRoutes = require('./routes/user');
const productRout = require('./routes/product');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/user', productRout);

module.exports = app;