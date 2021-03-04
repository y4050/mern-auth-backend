const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/test', ctrl.user.test);


// exports
module.exports = router;
