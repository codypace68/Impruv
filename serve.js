const express = require('express');
const path = require('path');
const app = express();

app.use('/impruv', express.static(path.join(__dirname, 'build')));

app.get('/impruv/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(4006, () => console.log('Listening on port 4006!'));