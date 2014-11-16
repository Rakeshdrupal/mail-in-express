var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.contact = function(req, res){
    res.render('contact', { title: 'Raging Flame Laboratory - Contact', page: 'contact' })
};
module.exports = router;
