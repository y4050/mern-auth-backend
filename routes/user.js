const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/test', ctrl.user.test);
router.post('/register', ctrl.user.register);
router.post('/login', ctrl.user.login);

// exports
module.exports = router;
