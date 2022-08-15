const Router = require('express');

const router = new Router();
const additionalPointsRequestController = require('../controllers/additionalPointsRequestController');
const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', additionalPointsRequestController.create);
router.get('/', multiRoleMiddleware('ADMIN', 'SUPERADMIN'), additionalPointsRequestController.getAll);
router.get('/:id', multiRoleMiddleware('ADMIN', 'SUPERADMIN'), additionalPointsRequestController.getOne);
router.delete('/',  multiRoleMiddleware('ADMIN', 'SUPERADMIN'), additionalPointsRequestController.deleteAll);
router.delete('/:id',  multiRoleMiddleware('ADMIN', 'SUPERADMIN'), additionalPointsRequestController.deleteOne);

module.exports = router; 