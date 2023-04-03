const Router = require('express');
const router = new Router();
const surveyController = require('../controllers/surveyController');
//const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ surveyController.create);
router.get('/', /* multiRoleMiddleware('USER','ADMIN', 'SUPERADMIN'),*/ surveyController.getAll);
router.get('/:id', /*multiRoleMiddleware('USER','ADMIN', 'SUPERADMIN'),*/ surveyController.getOne);
router.put('/:id',  /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'), */surveyController.update);
router.delete('/:id', /* multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ surveyController.deleteOne);
 
module.exports = router;