var express = require('express');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var MyHello = new Buffer(256);
  MyHello = fs.readFileSync( 'index.html' );
  response.send(MyHello.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
