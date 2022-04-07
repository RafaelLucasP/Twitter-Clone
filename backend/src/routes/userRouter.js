const { Router } = require('express');
const userController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');


const router = Router();

router.post('/', userController.create);
router.use(authentication);
router.get('/:id', userController.searchById);
router.delete('/:username', userController.delete);
router.patch('/:username', userController.edit);

module.exports = router;