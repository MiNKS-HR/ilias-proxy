const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
var proxy = require('express-http-proxy');
const port = process.env.PORT || 3000;

//app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
var request = require('request');

app.use('/similar', function(req,res) {
  var newurl = 'http://18.219.157.42:80/similar' + req.url;
  request(newurl).pipe(res);
});

app.use('/details', function(req,res) {
  var newurl = 'http://18.221.6.243:80/details' + req.url;
  request(newurl).pipe(res);
});

app.use('/experience/availableDate/', function(req,res) {
  var newurl = 'http://localhost:3002/experience/availableDate' + req.url;
  request(newurl).pipe(res);
});

app.use('/images/', function(req,res) {
  var newurl = 'http://localhost:3004/images' + req.url;
  request(newurl).pipe(res);
});

app.use('/img/', function(req,res) {
  var newurl = 'http://localhost:3004/img' + req.url;
  request(newurl).pipe(res);
});

app.use('/reviews/', function(req,res) {
  var newurl = 'http://localhost:3001/reviews' + req.url;
  request(newurl).pipe(res);
});



//DOESNT APPEAR TO WORK
//app.use('*', proxy('https://localhost:3001'));
//might want to look into it

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
