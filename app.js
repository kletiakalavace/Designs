/**
 * Module dependencies.
 */

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '/dist')));

/**
 * other routes will be served by vue.js
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

http.createServer(app).listen(port, () => {
  console.log('Express server listening on port ' + port);
});
