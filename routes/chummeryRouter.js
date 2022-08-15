const Router = require('express');
const router = new Router();
const chummeryController = require('../controllers/cummeryController');
const checkRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/',  checkRoleMiddleware('SUPERADMIN'), chummeryController.create);
router.get('/', chummeryController.getAll);
router.get('/:id', chummeryController.getOne);
router.put('/:id',  checkRoleMiddleware('SUPERADMIN'), chummeryController.update);
router.delete('/:id',  checkRoleMiddleware('SUPERADMIN'), chummeryController.deleteOne);
 
module.exports = router;