const express = require('express');
const router = express.Router();
const controller = require('../controllers/pasaghyr.controller');
const middleware = require('../middlewares/pasaghyr.middleware');


router.route('/')
    .post(controller.createPasaghyr);
router.route('/upload')
    .post(middleware.pasaghyrUpload, controller.uploadPasaghyr);
module.exports = router;