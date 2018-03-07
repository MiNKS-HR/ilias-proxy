const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
var proxy = require('express-http-proxy');
const port = process.env.PORT || 3000;

//app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
var request = require('request');

app.use('/experience/similar', function(req,res) {
  var newurl = 'http://localhost:3003/experience/similar' + req.url;
  request(newurl).pipe(res);
});

app.use('/experience/details', function(req,res) {
  var newurl = 'http://localhost:3005/experience/details' + req.url;
  request(newurl).pipe(res);
});

app.use('/host', function(req,res) {
  var newurl = 'http://localhost:3005/host' + req.url;
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
  console.log('CurrentURLHOST',req.url);
  request(newurl).pipe(res);
});



//DOESNT APPEAR TO WORK
//app.use('*', proxy('https://localhost:3001'));
//might want to look into it

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
