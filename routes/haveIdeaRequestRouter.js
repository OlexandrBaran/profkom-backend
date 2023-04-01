const Router = require('express');
const router = new Router();
const haveIdeaRequestController = require('../controllers/haveIdeaRequestController');
//const checkRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/',  haveIdeaRequestController.create);
router.get('/', /*checkRoleMiddleware('SUPERADMIN'),*/ haveIdeaRequestController.getAll);
router.get('/:id', /*checkRoleMiddleware('SUPERADMIN'),*/ haveIdeaRequestController.getOne);
router.delete('/:id', /*checkRoleMiddleware('SUPERADMIN'),*/ haveIdeaRequestController.deleteOne);
router.delete('/', /*checkRoleMiddleware('SUPERADMIN'),*/ haveIdeaRequestController.deleteAll);

module.exports = router; 