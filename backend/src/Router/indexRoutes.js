const express = require('express');
const indexrouter = express.Router();
const indexController = require('../Controller/indexController');

//router
indexrouter.use('/', indexController.Saludar);

module.exports = indexrouter;
