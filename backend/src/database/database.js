const mongoose = require('mongoose');


mongoose.connect(process.env.URL_SERVER, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('base de datos conectada'))
  .catch((err) => console.log(err));

