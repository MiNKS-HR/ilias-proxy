const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
//app.use(morgan('dev'));
var request = require('request');



app.use('/', express.static(path.join(__dirname, '../public/')));
app.use('/:id', express.static(path.join(__dirname, '../public/')));



app.use('/similar', function(req,res) {
  var newurl = 'http://13.56.28.204:80/similar' + req.url;
  request(newurl).pipe(res);
});

app.use('/details', function(req,res) {
  var newurl = 'http://54.176.214.18:80/details' + req.url;
  request(newurl).pipe(res);
});

// app.use('/experience/availableDate/', function(req,res) {
//   var newurl = 'http://localhost:3002/experience/availableDate' + req.url;
//   request(newurl).pipe(res);
// });

// app.use('/images/', function(req,res) {
//   var newurl = 'http://localhost:3004/images' + req.url;
//   request(newurl).pipe(res);
// });

// app.use('/img/', function(req,res) {
//   var newurl = 'http://localhost:3004/img' + req.url;
//   request(newurl).pipe(res);
// });

app.use('/reviews/', function(req,res) {
  var newurl = 'http://54.153.115.227:80/reviews' + req.url;
  request(newurl).pipe(res);
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
