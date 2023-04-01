const Router = require('express'); 
const router = new Router();
const additionalPointsResultController = require('../controllers/additionalPointsResultController');
const upload = require("../middleware/uploadFileToS3")
//const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', upload, /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ additionalPointsResultController.create);
router.get('/:id', /*multiRoleMiddleware('USER','ADMIN', 'SUPERADMIN'),*/ additionalPointsResultController.getOne);
router.get('/', /*multiRoleMiddleware('USER','ADMIN', 'SUPERADMIN'),*/ additionalPointsResultController.getAll);
router.put('/:id', /* multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ upload, additionalPointsResultController.update);
router.delete('/:id',/*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ additionalPointsResultController.deleteOne);

module.exports = router;  