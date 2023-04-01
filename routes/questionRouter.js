const Router = require('express');
const router = new Router();
const questionController = require('../controllers/questionController');
//const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ questionController.create);
router.get('/:id',  questionController.getOne);
router.put('/:id', /* multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ questionController.update); 
router.delete('/:id',  /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ questionController.deleteOne);

module.exports = router;