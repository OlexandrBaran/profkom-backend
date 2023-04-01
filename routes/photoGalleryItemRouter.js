const Router = require('express');
const router = new Router();
const photoGalleryItemController = require('../controllers/photoGalleryItemController');
const upload = require("../middleware/uploadFileToS3")
//const multiRoleMiddleware = require('../middleware/multiRoleMiddleware');

router.post('/', /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/upload, photoGalleryItemController.create);
router.get('/', photoGalleryItemController.getAll);
router.get('/:id',  photoGalleryItemController.getOne);
router.put('/:id', /* multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/upload, photoGalleryItemController.update); 
router.delete('/:id',  /*multiRoleMiddleware('ADMIN', 'SUPERADMIN'),*/ photoGalleryItemController.deleteOne);

module.exports = router;