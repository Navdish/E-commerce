const router = require('express').Router();
const { userController } = require('../controller');

router.get('/',  userController.fetchUsers)
router.post('/',  userController.createUser)
router.put('/:userId',  userController.updateUser)
router.patch('/:userId',  userController.restoreUser)
router.delete('/:userId',  userController.removeUser)
router.get('/:userId',  userController.fetchUser)

module.exports = router;