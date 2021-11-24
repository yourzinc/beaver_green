const express = require('express');
const router = express.Router();

const main = require('./main.js');
const video = require('./video.js')

router.use('/main', main);
router.use('/video', video);

module.exports = router;
