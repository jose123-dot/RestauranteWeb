const express = require('express');
const app = express();
const indexroutes = require('./Router/indexRoutes');


//midleware
app.get('/', indexroutes);

//servidor
app.listen(3000, ()=> console.log('servidor ejecutado'));