/* eslint-disable max-len */
const fs = require('fs');
const Image = require('../models/imageModel');

// File upload folder
const UPLOADS_FOLDER = './public/images/';

const create = async (req, res) => {
    try {
        // console.log('req.file = ', req.file);
        // console.log('req.body = ', req.body);
        const { filename: image } = req.file;
        const { title } = req.body;

        await Image.create({ title, image });

        res.status(200).json({ message: 'Data Inserted Successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to Insert' });
    }
};

const read = async (req, res) => {
    try {
        const images = await Image.find();
        res.send(images);
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
};

const remove = async (req, res) => {
    try {
        const { image } = req.params;
        // console.log('req.params= ', req.params);
        // console.log('image = ', image);
        const results = await Image.deleteOne({ image });
        fs.unlink(UPLOADS_FOLDER + image, (error) => {
            console.log('imagae gallery delete fsmodule error = ', error);
        }); // delete file from server using fs module(node js core module)
        res.send({ data: results });
    } catch (err) {
        res.status(500).json({ message: err.message });
        // console.log(err.message);
    }
};

module.exports = { create, read, remove };
