const express = require('express');
const router = express.Router();
const { productController } = require('../controller')
const authenticateJWT = require('../middleware/authMiddleware');
const aclmiddleware = require('../middleware/aclmiddleware');
const multer = require('multer');
const upload = multer({ dest: './uploads' })
const uploadmiddleware = upload.fields([{ name: 'images' }])

router.post('/', authenticateJWT, aclmiddleware, uploadmiddleware, productController.createProduct);
router.get('/vendor', authenticateJWT, aclmiddleware, productController.fetchProductsbyVendor);
router.get('/id', authenticateJWT, aclmiddleware, productController.fetchProductbyId);
router.put('/', authenticateJWT, aclmiddleware, productController.updateProduct)

module.exports = router;