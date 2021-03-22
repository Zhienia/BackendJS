const express = require('express');
const controler = require('../controlers/user');
const router = express.Router();

router.post('/login', controler.login);

router.post('/register', controler.register);

router.get('/:id', controler.takeInformationUser);

module.exports = router;