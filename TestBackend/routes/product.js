const express = require('express');
const controler = require('../controlers/product');
const router = express.Router();

router.post('/product', controler.createProduct);

router.patch('/product', controler.changeProduct);

router.delete('/product', controler.deleteProduct);

router.post('/product/downloadImage', controler.downloadImage);

module.exports = router;