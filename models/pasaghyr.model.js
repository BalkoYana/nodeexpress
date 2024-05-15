const { Schema, model } = require('mongoose');

const pasaghyrSchema = new Schema({
    surname: {
        type: String,
        required: true,
        trim: true,
    },
    destiny: {
        type: String,
        required: true,
        trim: true,
    },
    numberOfSpace: {
        type: Number,
        required: true,
        trim: true,
    },
    weight: {
        type: Number,
        required: true,
        trim: true,
    },






});
module.exports = model('pasaghyr', pasaghyrSchema)