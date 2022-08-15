const Router = require('express');
const router = new Router();
const announcementController = require('../controllers/announcementController');
const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', multiRoleMiddleware('ADMIN', 'SUPERADMIN'), announcementController.create);
router.get('/', announcementController.getAll);
router.get('/:id', announcementController.getOne);
router.put('/:id', multiRoleMiddleware('ADMIN', 'SUPERADMIN'), announcementController.update);
router.delete('/:id', multiRoleMiddleware('ADMIN', 'SUPERADMIN'), announcementController.deleteOne);   

module.exports = router;