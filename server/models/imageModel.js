const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('Image', imageSchema);
