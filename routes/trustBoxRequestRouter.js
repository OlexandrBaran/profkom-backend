const Router = require('express');
const router = new Router();
const trustBoxRequestController = require('../controllers/trustBoxRequestController');
const checkRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', trustBoxRequestController.create);
router.get('/', checkRoleMiddleware("SUPERADMIN"), trustBoxRequestController.getAll);
router.get('/:id', checkRoleMiddleware("SUPERADMIN"), trustBoxRequestController.getOne)
router.delete('/:id', checkRoleMiddleware("SUPERADMIN"), trustBoxRequestController.deleteOne);
router.delete('/',checkRoleMiddleware("SUPERADMIN"), trustBoxRequestController.deleteAll);

module.exports = router; 