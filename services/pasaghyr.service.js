const firstModel = require('../models/pasaghyr.model.js');

async function createFirst(pasaghyr) {

    return firstModel.create(pasaghyr)

}


module.exports = {
    createFirst
};
