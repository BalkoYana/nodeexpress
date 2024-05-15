const pasaghyrService = require('../services/pasaghyr.service');

async function createPasaghyr(req, res) {
    try {
        const newPasaghyr = await pasaghyrService.createFirst(req.body);

        res.status(200).json({
            status: 200,
            data: newPasaghyr,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};
async function uploadPasaghyr(req, res, next) {
    try {
        console.log(req.file);
        const jsonData = JSON.parse(req.file.buffer.toString());

        const newPasaghyr = await pasaghyrService.createFirst(jsonData);
        res.status(200).json({
            status: 200,
            data: newPasaghyr,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }

}
module.exports = {
    createPasaghyr,
    uploadPasaghyr
};