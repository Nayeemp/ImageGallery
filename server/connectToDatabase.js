const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/imageGallery');
        console.log('connection success');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectToDatabase;
