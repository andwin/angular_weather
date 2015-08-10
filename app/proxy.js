var express = require('express'),
    cors = require('cors'),
    request = require('request');

var app = express();
app.use(cors());

app.get('/city-list', function(req, res) {
  var q = req.query && req.query.q;
  var url = 'http://gd.geobytes.com/AutoCompleteCity?_=1436373259606&q=' + q;
  request(url).pipe(res);
});

var port = 3000;
app.listen(port, function () {
  console.log('Listening to port %s', port);
});
