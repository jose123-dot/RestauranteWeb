//dotenv
require('dotenv').config();

const express = require('express');
const app = express();
const indexroutes = require('./Router/indexRoutes');

require('./database/database');

//base de datos

//midleware
app.set('port', process.env.PORT || 3000);
app.get('/', indexroutes);

//servidor
app.listen(process.env.PORT, ()=> console.log('servidor ejecutado'));

//TODO: ARREGLAR LA VARIABLE DEL ENTORNO