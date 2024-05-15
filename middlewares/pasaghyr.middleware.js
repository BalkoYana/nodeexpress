const multer = require('multer');
const pasaghyrUpload = multer().single('file');

module.exports = {
    pasaghyrUpload
};