const Router = require('express');
const router = new Router();
const teamMemberController = require('../controllers/teamMemberController');
const checkRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', checkRoleMiddleware("SUPERADMIN"), teamMemberController.create);
router.get('/',  teamMemberController.getAll);
router.get('/:id', teamMemberController.getOne);
router.put('/:id', checkRoleMiddleware("SUPERADMIN"), teamMemberController.update);
router.delete('/:id', checkRoleMiddleware("SUPERADMIN"), teamMemberController.deleteOne);

module.exports = router; 