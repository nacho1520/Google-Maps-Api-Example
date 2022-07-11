//***** Require´s *****/
const { Router } = require('express');
const mainController = require('../controllers/main.controller');

//***** Router initialization *****/
const router = Router();

router.get('/', mainController.home);

module.exports = router;

