const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getList);
router.get('/sortByGold', usersController.getFilteredList)
router.get('/id/:id', usersController.getItemById);
router.get('/pseudo/:pseudo', usersController.getItemByName);
router.get('/email/:email', usersController.getItemByMail);
router.post('/', usersController.addItem);
router.post('/update/:id', usersController.updateItem);
router.delete('/:id', usersController.deleteItem);

module.exports = router;
