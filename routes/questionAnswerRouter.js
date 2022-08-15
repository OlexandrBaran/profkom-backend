const Router = require('express');
const router = new Router();
const questionAnswerController = require('../controllers/questionAnswerController');
const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', multiRoleMiddleware('ADMIN', 'SUPERADMIN'), questionAnswerController.create);
router.get('/', questionAnswerController.getAll);
router.put('/:id', multiRoleMiddleware('ADMIN', 'SUPERADMIN'), questionAnswerController.update);
router.delete('/:id', multiRoleMiddleware('ADMIN', 'SUPERADMIN'), questionAnswerController.deleteOne);

module.exports = router; 