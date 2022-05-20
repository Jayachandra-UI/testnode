var express = require('express');
var app = express();

app.get('/list', function (req, res) {
  res.send('open app Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});