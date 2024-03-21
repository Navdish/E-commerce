const { authenticateUser } = require('../middleware/auth');

const router = require('express').Router();
router.use('/users', authenticateUser,  require('./user'));

module.exports = router;