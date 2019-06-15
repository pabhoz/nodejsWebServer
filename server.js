const express = require('express');
const path = require('path');
const app = express();
const port = 8888;

app.use( express.static(`${__dirname}/views`) );
app.use( express.static(`${__dirname}/public`) );

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

let users = [
 {name: "Pablo", username: "Pabhoz", email: "pabhoz@usbcali.edu.co"},
 {name: "Pedro", username: "Pedroz", email: "pedroz@usbcali.edu.co"},
 {name: "Pepe", username: "Pepez", email: "pepez@usbcali.edu.co"}
]

app.get('/', function (req, res) {
  res.render('index/index');
});
app.get('/user', function (req, res) {
  res.render('user/index');
});
app.get('/user/:user', function (req, res) {
  app.set('view engine', 'hbs');
  /**
   * TODO: Capturar el parámetro
   * mandar al usuario a la vista
   * y hacer render de la información
   */
  res.render('user/detail',{user});
});

app.listen(port, function () {
  console.log(`El super badass web server está escuchando por el puerto ${port}`);
});