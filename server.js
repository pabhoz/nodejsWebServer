const express = require('express');
const path = require('path');
const app = express();
const port = 8888;

app.use( express.static(`${__dirname}/views`) );
app.use( express.static(`${__dirname}/public`) );

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

let users = [
 {name: "Pablo", username: "pabhoz", email: "pabhoz@usbcali.edu.co"},
 {name: "Pedro", username: "pedroz", email: "pedroz@usbcali.edu.co"},
 {name: "Pepe", username: "pepez", email: "pepez@usbcali.edu.co"}
]

/*
app.get('*', function (req, res) {
  let [,controller,method,param] = req.url.split("/");
  res.render(`${controller}/${method}`);
});
*/

app.get('/', function (req, res) {
  res.render('index/index');
});
app.get('/user', function (req, res) {
  res.render('user/index');
});
app.get('/user/:user', function (req, res) {
  app.set('view engine', 'hbs');
  
  let u = req.params.user; console.log(u);
  
  let user = users.find(user => user.username.toLowerCase() == u);
  console.log(user);
  res.render('user/detail',{user});
});

app.listen(port, function () {
  console.log(`El super badass web server está escuchando por el puerto ${port}`);
});