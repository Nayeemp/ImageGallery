/* eslint-disable consistent-return */
/* eslint-disable max-len */
const express = require('express');
const fileUploader = require('../utils/fileUploader');

const { create, read, remove } = require('../controllers/imageGalleryController');

const Route = express.Router();
Route.post('/', fileUploader.single('image'), create);
Route.get('/', read);
Route.delete('/:image', remove);

module.exports = Route;
