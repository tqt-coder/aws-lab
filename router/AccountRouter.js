const express = require('express');
const router = express.Router();

const personController = require('../controller/PersonController');

router.post('/callapi', personController.createNewRecord);

module.exports = router;
