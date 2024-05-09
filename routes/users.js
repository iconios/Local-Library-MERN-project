const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Get cool page
router.get('/cool', function(req, res) {
  res.send("You're so cool")
})

module.exports = router;
