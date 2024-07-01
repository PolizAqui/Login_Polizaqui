const express = require('express');
const app = express();
const _var = require('./global/_var.js');
const cors = require('cors');

/*****  ROUTES *****/

const routes = require('./routes/auth.router.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

/***** Server *****/

app.listen(_var.PORT, (err) => {
   if (err) throw err
   console.log(`Servidor iniciado en: http://localhost:${_var.PORT}`);
})

/***** ROUTER *****/
app.use(routes)