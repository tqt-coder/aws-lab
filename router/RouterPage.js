const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/client/index.html');
});

router.get('/error', function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/client/error.html');
});

module.exports = router;
