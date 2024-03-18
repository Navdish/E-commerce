const router = require('express').Router();
const { userController } = require('../controller');

router.put('/',  userController.modifiedUser)

module.exports = router;