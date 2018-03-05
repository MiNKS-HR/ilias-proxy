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
  console.log('CurrentURLSIM',req.url);
  request(newurl).pipe(res);
});

app.use('/experience/details', function(req,res) {
  var newurl = 'http://localhost:3004/experience/details' + req.url;
  console.log('CurrentURLDET',req.url);
  request(newurl).pipe(res);
});

app.use('/host', function(req,res) {
  var newurl = 'http://localhost:3004/host' + req.url;
  console.log('CurrentURLHOST',req.url);
  request(newurl).pipe(res);
});


//DOESNT APPEAR TO WORK
//app.use('*', proxy('https://localhost:3001'));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
