const Router = require('express');
const router = new Router();
const teamMemberController = require('../controllers/teamMemberController');
const upload = require("../middleware/uploadFileToS3")

//const checkRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', /*checkRoleMiddleware("SUPERADMIN"),*/upload, teamMemberController.create);
router.get('/',  teamMemberController.getAll);
router.get('/:id', teamMemberController.getOne);
router.put('/:id',/* checkRoleMiddleware("SUPERADMIN"),*/upload, teamMemberController.update);
router.delete('/:id',/* checkRoleMiddleware("SUPERADMIN"),*/ teamMemberController.deleteOne);

module.exports = router; 