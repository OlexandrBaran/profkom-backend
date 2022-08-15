const Router = require('express');
const router = new Router();
const pollController = require('../controllers/pollController');
const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', multiRoleMiddleware('ADMIN', 'SUPERADMIN'), pollController.create);
router.get('/',  multiRoleMiddleware('USER','ADMIN', 'SUPERADMIN'), pollController.getAll);
router.get('/:id', multiRoleMiddleware('USER','ADMIN', 'SUPERADMIN'), pollController.getOne);
router.put('/:id',  multiRoleMiddleware('ADMIN', 'SUPERADMIN'), pollController.update);
router.delete('/:id',  multiRoleMiddleware('ADMIN', 'SUPERADMIN'), pollController.deleteOne);
 
module.exports = router;