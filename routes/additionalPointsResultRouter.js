const Router = require('express');
const router = new Router();
const additionalPointsResultController = require('../controllers/additionalPointsResultController');
const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/',  multiRoleMiddleware('ADMIN', 'SUPERADMIN'), additionalPointsResultController.create);
router.get('/', multiRoleMiddleware('USER','ADMIN', 'SUPERADMIN'), additionalPointsResultController.getAll);
router.get('/:id',multiRoleMiddleware('USER','ADMIN', 'SUPERADMIN'), additionalPointsResultController.getOne);
router.put('/:id', multiRoleMiddleware('ADMIN', 'SUPERADMIN'), additionalPointsResultController.update);
router.delete('/:id',multiRoleMiddleware('ADMIN', 'SUPERADMIN'), additionalPointsResultController.deleteOne);

module.exports = router;  