const Router = require('express');
const router = new Router();
const ratingController = require('../controllers/ratingController');
const upload = require("../middleware/uploadFileToS3")
//const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/',/* multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ upload, ratingController.create);
router.get('/', /*multiRoleMiddleware('USER','ADMIN', 'SUPERADMIN'),*/ ratingController.getAll);
router.get('/:id', /*multiRoleMiddleware('USER','ADMIN', 'SUPERADMIN'),*/ ratingController.getOne);
router.put('/:id', /* multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ upload, ratingController.update);
router.delete('/:id',  /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ ratingController.deleteOne);

module.exports = router; 