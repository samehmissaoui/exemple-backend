const express = require('express');
const router = express.Router();
const userController = require('./controller');

router.get('/', userController.getUser);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
