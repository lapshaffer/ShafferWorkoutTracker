// get / for index.html
// get /exercise for exercise.html
// get /stats for stats.html
const router = require('express').Router();
const path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html/index.html'))
  });

module.exports = router