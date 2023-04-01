const Router = require('express');
const router = new Router();
const upload = require("../middleware/uploadFileToS3")

const announcementController = require('../controllers/announcementController');
//const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ upload, announcementController.create);
router.get('/:id', announcementController.getOne);
router.get('/', announcementController.getAll);
router.put('/:id', /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'), */ upload, announcementController.update);
router.delete('/:id', /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ announcementController.deleteOne);   

module.exports = router;