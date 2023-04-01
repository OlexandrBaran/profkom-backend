const Router = require('express');
const router = new Router();
const newsController = require('../controllers/newsController');
const upload = require("../middleware/uploadFileToS3")
//const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/upload, newsController.create);
router.get('/', newsController.getAll);
router.get('/:id',  newsController.getOne);
router.put('/:id', /* multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/upload, newsController.update); 
router.delete('/:id',  /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ newsController.deleteOne);

module.exports = router;