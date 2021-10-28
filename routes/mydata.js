var express = require('Sai Pranay Siddam');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Express' });
});

module.exports = router;