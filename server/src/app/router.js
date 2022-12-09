const router = require('express').Router();
const db = require('./db');

router.get('/', (req, res) => {
  if (db) res.send('Your backend router is working');
});

module.exports = router;
