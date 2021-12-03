const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) {
    req.app.locals.decodedUser = null
  }
  res.render('index', { title: 'Optik TV' });
});

module.exports = router;
