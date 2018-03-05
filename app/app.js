
/**
 * Module dependencies.
 */

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/dist')));

/**
 * other routes will be served by vue.js
 */
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
